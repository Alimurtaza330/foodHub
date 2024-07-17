import express from "express";
import User from "../model/User.js";
import { body, validationResult } from "express-validator";
const router = express.Router();
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const key = "nbndebvhkajheuvnbjvabwjevVFJVNRJNVBWjnYXRlYXRpb24oa";
router.post(
  "/newUser",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    const securepassword = await bcrypt.hash(req.body.password, salt);
    try {
      console.log("Received request to /newUser");
      const newUser = await User.create({
        name: req.body.name,
        password: securepassword,
        email: req.body.email,
        location: req.body.location,
      });
      console.log("User created:", newUser);
      res.json({ success: true, user: newUser });
    } catch (error) {
      console.error("Error creating user:", error);
      res
        .status(500)
        .json({
          success: false,
          message: "Error creating user",
          error: error.message,
        });
    }
  }
);

router.post("/loginUser", async (req, res) => {
  try {
    console.log("Received request to /loginUser");
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }
    const pwdpassword = await bcrypt.compare(req.body.password, user.password);
    if (!pwdpassword) {
      return res
        .status(400)
        .json({ success: false, message: "Incorrect password" });
    }
    const payloadata = {
      user: {
        id: user._id,
      },
    };
    const authToken = jwt.sign(payloadata, key);

    res.json({
      success: true,
      message: "User logged in successfully",
      authToken: authToken,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Error logging in user",
        error: error.message,
      });
  }
});

export default router;
