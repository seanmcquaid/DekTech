const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth");
const passport = require("../passport/passport");

/* GET users listing. */
router.post('/login', (req, res, next) => {
    // console.log('routes/user.js, login, req.body: ');
    // console.log(req.body)
    next()
},
passport.authenticate('local'), (req, res) => {
    console.log('logged in', req.user);
    const userInfo = {
        username: req.user.username
    };
    res.json(userInfo);
});

router.post("/register", authController.postRegister);

module.exports = router;
