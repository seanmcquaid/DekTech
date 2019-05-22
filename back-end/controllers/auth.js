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
    
};