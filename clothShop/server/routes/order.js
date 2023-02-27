const express = require("express");
const router = express.Router();
const orderController = require("../controller/order");
const { VerifyLogin, VerifyAdmin, verifyToken } = require("./verifyToken");
//for all login user
router.post("/", verifyToken, orderController.createOrder);

//only for admin
router.put("/:orderId", VerifyAdmin, orderController.updateOrder);
router.delete("/:orderId", VerifyAdmin, orderController.deleteOrder);
router.get("/find/:userId", VerifyAdmin, orderController.getOrderById);
router.get("/", VerifyAdmin, orderController.getAllOrders);
router.get("/income", VerifyAdmin, orderController.getMonthIncome);

module.exports = router;
