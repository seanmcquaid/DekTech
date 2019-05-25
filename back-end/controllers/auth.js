const User = require("../models/user");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const config = require("../config");
const bcrypt = require("bcryptjs");

const transporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        apiKey : config.sendGridKey
    }
}));

exports.postLogin = (req,res,next) => {
    
}

exports.postRegister = (req,res,next) => {
   const {username, password} = req.body;
   User.findOne({username : username})
        .then(userDoc => {
            if(userDoc){
                return res.json({
                    message : "User already exists"
                });
            }
            return bcrypt.hash(password, 12)
                        .then(hashedPassword => {
                            const newUser = new User({
                                username : username,
                                password : hashedPassword
                            });
                            req.session.userInfo = newUser;
                            newUser.save();
                            return res.json({
                                message : "Successfully registered",
                                userId : req.session.userInfo._id
                            });
                        });
        })
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err));
};