const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const auth = require("../middleware/auth");

/* GET users listing. */

router.post("/login", authController.postLogin);

router.post("/register", authController.postRegister);

router.get("/checkToken", auth, authController.checkToken);

router.post("/logout", authController.postLogout);

module.exports = router;
