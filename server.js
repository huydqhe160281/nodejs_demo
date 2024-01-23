import express from "express";
import * as dotenv from "dotenv";
import productRoute from "./src/routers/productRouter.js";
import connectMongoDB from "./src/connection/connectMongoDB.js";
import mongoose from "mongoose";
import { userSchema } from "./src/models/User.js";

dotenv.config();

const userModel = mongoose.model("users", userSchema);

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(userModel).find();
});

app.get("/contact", (req, res) => {
  res.send("contact page!");
});

//test connect mongoose
app.listen(port, async () => {
  await connectMongoDB();
  console.log(`Example app listening on port http://localhost:${port}`);
});
