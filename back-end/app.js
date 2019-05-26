const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const mongoose = require("mongoose");
const config = require("./config");

const User = require("./models/user");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());

app.use(
    session({
        secret : config.secret,
        store : new MongoDBStore({
            uri : config.MONGODB_URI,
            collection : "sessions"
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
        },
        resave: false,
        saveUninitialized: false
    })
);


// app.use((req,res,next)=>{
//     console.log(req.session)
//     next();
// });

app.use((req,res,next)=>{
    if(!req.session.userInfo){
       return next();
    }
    User.findOne({username : req.session.userInfo._id})
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

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