import express from "express";
import * as dotenv from "dotenv";
import productRoute from "./src/routers/productRouter.js";
import connectMongoDB from "./src/connection/connectMongoDB.js";
// import mongoose from "mongoose";

dotenv.config();

// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// const userSchema = new Schema({
//   id: ObjectId,
//   name: String,
//   age: Number,
// });

// const userModel = mongoose.model("user", userSchema);

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
  console.log(userModel);
});

app.get("/contact", (req, res) => {
  res.send("contact page!");
});

app.use("/products", productRoute);

//test connect mongoose
app.listen(port, async () => {
  await connectMongoDB();
  console.log(`Example app listening on port http://localhost:${port}`);
});
