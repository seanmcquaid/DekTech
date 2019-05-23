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

// https://github.com/thechutrain/mern-passport/blob/master/server/auth/index.js


exports.postLogin = (req,res,next) => {
    
};

exports.postRegister = (req,res,next) => {
    const {username, password} = req.body;
    // console.log(username, password)
    User.findOne({username : username})
        .then(user => {
            if(user){
                return res.json({
                    message : "User already exists"
                });
            }
            const newUser = new User({
                username : username,
                password : password
            });
            return newUser.save()
                .then((user)=>{
                    return res.json({
                        message : "Successfully registered"
                    })
                });
        })
        .catch(err => {
            console.log(err);
        })
};