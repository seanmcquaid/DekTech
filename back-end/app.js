const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require("mongoose");
const config = require("./config");

const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session");

const csrf = require("csurf");
const flash = require("connect-flash");

const authRoutes = require('./routes/auth');

const app = express();

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(
    session({
        secret : "super secret!",
        resave: false,
        saveUninitialized: false
    })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRoutes);

mongoose
    .connect(config.MONGODB_URI, {useNewUrlParser: true})
    .then(result => {
        // console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

module.exports = app;