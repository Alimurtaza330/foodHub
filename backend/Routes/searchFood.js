import express from "express";
import FoodItem from "../model/FoodItem.js";

const router = express.Router();

router.post("/search", async (req, res) => {
  const { query } = req.body;

  try {
    const results = await FoodItem.find({
      name: { $regex: query, $options: "i" },
    });
    res.status(200).json({ results });
  } catch (error) {
    console.error("Error searching for food items:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
