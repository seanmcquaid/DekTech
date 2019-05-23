const User = require("../models/user");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const config = require("../config");
const passport = require("../passport/passport");

const transporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        apiKey : config.sendGridKey
    }
}));

exports.postLogin =  (req,res,next) => {
    passport.authenticate("local"), (req,res) => {
        const userInfo = {
            username : req.user.username
        }
        console.log(userInfo)
    res.send(userInfo)
    }
};

exports.postRegister = (req,res,next) => {
    const {username, password} = req.body;
    // console.log(username, password)
    User.findOne({username : username})
        .then(user => {
            if(user){
                return res.json({
                    message : "User already exists",
                    loggedIn : false
                });
            }
            const newUser = new User({
                username : username,
                password : password
            });
            return newUser.save()
                .then((user)=>{
                    return res.json({
                        message : "Successfully registered",
                        loggedIn : true
                    })
                });
        })
        .catch(err => {
            console.log(err);
        })
};