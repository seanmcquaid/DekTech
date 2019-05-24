const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors")

const mongoose = require("mongoose");
const config = require("./config");

const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const passport = require("./authentication/passport");

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
        resave: false,
        saveUninitialized: false
    })
);

app.use(passport.initialize());
// app.use(passport.session());

// app.use((req,res,next)=>{
//     console.log(req.session)
//     next();
// })

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