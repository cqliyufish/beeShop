const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart");
const { VerifyLogin, VerifyAdmin, verifyToken } = require("./verifyToken");

//get a cart, get own cart
router.get("/find/:userId", VerifyLogin, cartController.getCart);
//get all carts by admin
router.get("/", VerifyAdmin, cartController.getCarts);

//create a cart
router.post("/", verifyToken, cartController.createCart);
//update a cart, only update own
router.put("/:cartId", VerifyLogin, cartController.updateCart);
//del a cart, only del own
router.delete("/:cartId", VerifyLogin, cartController.deleteCart);

module.exports = router;
