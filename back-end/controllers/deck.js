const User = require("../models/user");
const Card = require("../models/card");
const auth = require("../middleware/auth");

exports.getDeck = (req,res,next) => {
    // check user info then return deck from db
    
}

exports.addToDeck = (req,res,next) => {
    // check user info, check for duplicates then add to db if no duplicates
    console.log(req.user);
    next();
}

exports.removeFromDeck = (req,res,next) => {
    // filter out selected card then replace deck with new deck
}

exports.clearDeck = (req,res,next) => {
    // clear out deck
}