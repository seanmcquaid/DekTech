const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");

/* GET users listing. */

router.get("/checkSession", authController.checkUserSession);

router.post("/login", authController.postLogin);

router.post("/register", authController.postRegister);

module.exports = router;
