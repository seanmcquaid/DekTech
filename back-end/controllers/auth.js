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

exports.checkUserSession = (req,res,next) => {
    // console.log(req.session)
    if(req.session.userInfo){
        // console.log(req.session)
        res.json({
            userId : req.session.userInfo._id,
            isLoggedIn : req.session.isLoggedIn
        });
    } else {
        // console.log("again")
        res.json({
            isLoggedIn : false
        });
    }
}

exports.postLogin = (req,res,next) => {
    const {username, password} = req.body;
    User.findOne({username : username})
        .then(userDoc => {
            if(!userDoc){
                return res.json({
                    isLoggedIn : false,
                    message : "User doesn't exist"
                });
            }
            bcrypt.compare(password, userDoc.password)
                        .then(passwordMatch => {
                            if(passwordMatch){
                                req.session.userInfo = userDoc;
                                req.session.isLoggedIn = true;
                                console.log(req.session);
                                req.session.save(err => {
                                    return res.json({
                                        message : "Successfully logged in!",
                                        userId : req.session.userInfo._id,
                                        isLoggedIn : req.session.isLoggedIn
                                    });
                                });
                            } else {
                                return res.json({
                                    message : "Incorrect password, try again!",
                                    isLoggedIn : req.session.isLoggedIn
                                });
                            }
                        });

        })
        .catch(err => console.log(err))
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
                            req.session.isLoggedIn = true;
                            newUser.save();
                            req.session.save(err => {
                                return res.json({
                                    message : "Successfully registered",
                                    userId : req.session.userInfo._id,
                                    isLoggedIn : req.session.isLoggedIn
                                });
                            });
                        });
        })
        .catch(err => console.log(err));
};