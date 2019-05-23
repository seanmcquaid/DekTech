const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth");
const passport = require("../authentication/passport");

/* GET users listing. */
router.post('/login', authcontroller.postLogin);

router.post("/register", authController.postRegister);

module.exports = router;
