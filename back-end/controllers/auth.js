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
    
};

exports.postRegister = (req,res,next) => {

};