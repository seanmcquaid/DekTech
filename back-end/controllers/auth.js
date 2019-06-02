const User = require("../models/user");
const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");
const config = require("../config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const transporter = nodemailer.createTransport(sendGridTransport({
    auth: {
        apiKey : config.sendGridKey
    }
}));

exports.postLogin = (req,res,next) => {
    
};

exports.postRegister = (req,res,next) => {
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({
            message : "Be sure to fill out all fields!"
        });
    }
    User.findOne({username})
        .then(user => {
            if(user){
                return res.status(400).json({
                    message : "User already exists!"
                });
            }
            return bcrypt.hash(password, 12)
                        .then(hashedPassword => {
                            const newUser = new User({
                                username : username,
                                password : hashedPassword
                            });
                            jwt.sign(
                                {id : newUser._id},
                                config.jwtSecret,
                                {expiresIn : 3600},
                                token => {
                                    res.json({
                                        token,
                                        userInfo : newUser,
                                        loggedIn : true
                                    });
                                });
                        })
        })
        .catch(err => console.log(err));

};