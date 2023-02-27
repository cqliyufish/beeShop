const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const passport = require("passport");

router.post("/register", authController.register);
router.post("/login", authController.passwordLogin);

module.exports = router;
