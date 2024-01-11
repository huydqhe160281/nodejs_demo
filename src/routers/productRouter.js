import express from "express";
import {
  getAllProduct,
  getProductById,
} from "../controllers/productController.js";

const productRoute = express.Router();

// Get /products -> get all products
productRoute.get("/", getAllProduct);

// Get /products/:id -> get all products
productRoute.get("/:id", getProductById);

// Post /product -> create all products

// Put /products/:id -> update all products

// Delete /products/:id -> Delete all products

export default productRoute;
