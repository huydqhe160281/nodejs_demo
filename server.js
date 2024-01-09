import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/contact", (req, res) => {
  res.send("contact page!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
