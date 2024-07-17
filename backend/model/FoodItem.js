// models/FoodItem.js
import mongoose from "mongoose";

const FoodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },
  CategoryName: {
    type: String,
    required: true,
  },
  ooptions: {
    type: Map,
    of: Number,
    required: true,
  },
});

const FoodItem = mongoose.model("FoodItem", FoodItemSchema);
export default FoodItem;
