const express = require("express");

const router = express.Router();

const { getAllProducts , getProductById , createProduct , updateProduct , deleteProduct} = require('../controllers/productController');

// Get all products
router.get("/",getAllProducts);

// Get product by id
router.get("/:id", getProductById);

// Post new Product
router.post("/", createProduct);

// Update existing product
router.put("/:id", updateProduct);

// Delete the Product
router.delete("/:id", deleteProduct);

module.exports = router;