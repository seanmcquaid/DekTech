const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth");

/* GET users listing. */
router.post('/login', authController.postLogin);

module.exports = router;
