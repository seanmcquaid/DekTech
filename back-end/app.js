const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const mongoose = require("mongoose");
const config = require("./config");

const authRoutes = require('./routes/auth');
const deckRoutes = require("./routes/deck");

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRoutes);
app.use("/deck", deckRoutes);

mongoose
    .connect(config.MONGODB_URI, {useNewUrlParser: true})
    .then(result => {
        // console.log(result)
    })
    .catch(err => {
        console.log(err)
    });

module.exports = app;