const User = require("../models/user");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const config = require("../config");

const transporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        apiKey : config.sendGridKey
    }
}));


exports.postLogin = (req,res,next) => {
    console.log(req.body);
};

exports.postRegister = (req,res,next) => {
    const userEmail = req.body.userEmail;
    const userPassword = req.body.userPassword;
    User.findOne({email: userEmail})
        .then(user => {
            if(user){
                return res.json({
                    message : "User already exists"
                });
            } else {
                return bcrypt.hash(userPassword, 12)
                .then(hashedPassword => {
                    const user = new User({
                        email : userEmail,
                        password : hashedPassword
                    });
                    return user.save().then(result => {
                        return res.json({
                            message : "Successfully registered"
                        })
                    });
                });
            }
        })
        .catch(err => {
            console.log(err)
        });
};