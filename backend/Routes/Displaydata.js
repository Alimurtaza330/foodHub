import express from "express";
const router = express.Router();

router.post("/foodData", async (req, res) => {
  try {
    const responseData = {
      success: true,
      data: {
        foodItems: global.food_Items,
        foodCategory: global.foodcategory,
      },
    };

    res.json(responseData);
  } catch (error) {
    console.error("Error fetching data:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Error fetching data",
        error: error.message,
      });
  }
});

export default router;
