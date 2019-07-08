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

exports.checkToken = (req,res,next) => {
    const userId = req.user.id;
    User.findOne({_id : userId})
        .then(user => {
            const token = jwt.sign(
                {id : user._id},
                config.jwtSecret,
                {expiresIn: 36000000}
            );
            res.json({
                token: token,
                message : "Valid token",
                isAuthenticated : true,
                userInfo : user,
            });
        })
        .catch(err => console.log(err));
}

exports.postLogin = (req,res,next) => {
    const {username, password} = req.body;
    if(!username || !password){
        return res.json({
            token : null,
            message : "Please enter all fields!",
            isAuthenticated : false,
            userInfo : null,
        });
    }

    User.findOne({username})
        .then(user => {
            console.log(user)
            if(!user){
                return res.json({
                    token : null,
                    message : "User doesn't exist!",
                    isAuthenticated : false,
                    userInfo : null,
                });
            }

            return bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch){
                        return res.json({
                            token : null,
                            message : "Incorrect password, try again!",
                            isAuthenticated : false,
                            userInfo : null,
                        });
                    };

                    const token = jwt.sign(
                        {id : user._id},
                        config.jwtSecret,
                        {expiresIn: 36000000}
                    );

                    return res.json({
                        token,
                        message : "Successfully logged in!",
                        isAuthenticated : true,
                        userInfo : user,
                    });

                })

        })
        .catch(err => console.log(err));

};

exports.postRegister = (req,res,next) => {
    const {username, password} = req.body;
    if(!username || !password){
        return res.json({
            token : null,
            message : "Be sure to fill out all fields!",
            isAuthenticated : false,
            userInfo : null
        });
    }
    User.findOne({username})
        .then(user => {
            if(user){
                return res.json({
                    token : null,
                    message : "User already exists",
                    isAuthenticated : false,
                    userInfo : null
                });
            }
            return bcrypt.hash(password, 12)
                        .then(hashedPassword => {
                            const newUser = new User({
                                username : username,
                                password : hashedPassword,
                                deck : {
                                    cards : [],
                                    lands : 0,
                                    commander : "",
                                },
                            });
                            newUser.save();
                            const token = jwt.sign(
                                {id : newUser._id},
                                config.jwtSecret,
                                {expiresIn : 360000000},
                            );
                            res.json({
                                token,
                                message : "Successfully registered",
                                userInfo : newUser,
                                isAuthenticated : true,
                            });
                        })
        })
        .catch(err => console.log(err));
};

exports.postLogout = (req,res,next) => {
    req.user = null;
    res.json({
        token : null,
        message : "Successfully logged out!",
        isAuthenticated : false,
        userInfo : null
    });
}