const express = require("express");
const router = express.Router();
const productController = require("../controller/product");
const { VerifyAdmin, verifyToken, VerifyLogin } = require("./verifyToken");

//get products
router.get("/:productId", productController.getProduct);
router.get("/", productController.getAllProducts);
//create a product
router.post("/", VerifyAdmin, productController.createProduct);
router.put("/:productId", VerifyAdmin, productController.updateProduct);
router.delete("/:productId", VerifyAdmin, productController.deleteProduct);

module.exports = router;
