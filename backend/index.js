import express from "express";
import connectDB from "./DbConnection.js";
import createUser from "./Routes/createUser.js";
import cors from "cors";
import Displaydata from "./Routes/Displaydata.js";
import fetchData from "./fetchData.js";
import searchFood from "./Routes/searchFood.js";
import OrderData from "./Routes/OrderData.js";
const app = express();
const port = 8001;

const initializeServer = async () => {
  try {
    await connectDB();
    await fetchData();

    app.use(cors());
    app.use(express.json());
    app.use("/api", createUser);
    app.use("/api", Displaydata);
    app.use("/api", searchFood);
    app.use("/api", OrderData);
    app.listen(port, () => {
      console.log("Server is running on port: " + port);
    });
  } catch (error) {
    console.error("Initialization error:", error);
  }
};

initializeServer();
