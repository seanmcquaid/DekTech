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
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({
            message : "Please enter all fields!",
            loggedIn : false,
        });
    }

    User.findOne({username})
        .then(user => {
            if(!user){
                return res.status(400).json({
                    message : "User doesn't exist!",
                    loggedIn : false,
                });
            }

            return bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch){
                        return res.status(400).json({
                            message : "Invalid password!",
                            loggedIn : false,
                        });
                    };

                    const token = jwt.sign(
                        {id : user._id},
                        config.jwtSecret,
                        {expiresIn: 3600}
                    );

                    return res.json({
                        token,
                        userInfo : user,
                        loggedIn : true
                    });

                })

        })
        .catch(err => console.log(err));

};

exports.postRegister = (req,res,next) => {
    const {username, password} = req.body;
    if(!username || !password){
        return res.status(400).json({
            message : "Be sure to fill out all fields!",
            loggedIn : false,
        });
    }
    User.findOne({username})
        .then(user => {
            if(user){
                return res.status(400).json({
                    message : "User already exists!",
                    loggedIn : false,
                });
            }
            return bcrypt.hash(password, 12)
                        .then(hashedPassword => {
                            const newUser = new User({
                                username : username,
                                password : hashedPassword,
                            });
                            newUser.save();
                            const token = jwt.sign(
                                {id : newUser._id},
                                config.jwtSecret,
                                {expiresIn : 3600},
                            );
                            res.json({
                                token,
                                userInfo : newUser,
                                loggedIn : true,
                            });
                        })
        })
        .catch(err => console.log(err));

};