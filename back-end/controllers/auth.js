const User = require("../models/user");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const config = require("../config");
const passport = require("../authentication/passport");

const transporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        apiKey : config.sendGridKey
    }
}));

exports.postLogin = (req,res,next) => {
    
}

exports.postRegister = (req,res,next) => {
    passport.authenticate("register", (err,user,info)=> {
        console.log(info)
        if(err){
            console.log(err)
        }
        if(info != undefined){
            console.log(info.message)
            res.json(info.message)
        } else{
            req.logIn(user, err => {
                User.findOne({username: username})
                    .then((user) => {
                        console.log(user)
                        console.log("user created in db")
                        res.json({message : "user created"})
                    })
                    .catch();
            })
        }
    })
    (req,res,next);
};