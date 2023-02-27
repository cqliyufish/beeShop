const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const { VerifyLogin, VerifyAdmin } = require("./verifyToken");

//VerifyAdmin: only admin allowed
router.get("/stats", VerifyAdmin, userController.getStats);
router.get("/:id", VerifyAdmin, userController.getUser); //find all user by id
router.get("/", VerifyAdmin, userController.getAllUsers); //find all user
//VerifyLogin: check login
router.put("/:id", VerifyLogin, userController.updateUser);
router.delete("/:id", VerifyLogin, userController.deleteUser);

module.exports = router;
