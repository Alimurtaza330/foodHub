import mongoose from "mongoose";

const fetchData = async () => {
  try {
    const db = mongoose.connection.db;
    const foodCollection = db.collection("food_item");
    const foodData = await foodCollection.find({}).toArray();

    if (foodData.length === 0) {
      console.log("No data found in food_item collection");
    } else {
      const categoryCollection = db.collection("foodcategory");
      const categoryData = await categoryCollection.find({}).toArray();

      if (categoryData.length === 0) {
        console.log("No data found in foodcategory collection");
      } else {
        global.food_Items = foodData;
        global.foodcategory = categoryData;
        // console.log("Fetched Data:", global.food_Items, global.foodcategory);
      }
    }
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

export default fetchData;
