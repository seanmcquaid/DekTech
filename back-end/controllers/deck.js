const User = require("../models/user");
const Card = require("../models/card");

exports.getDeck = (req,res,next) => {
    // check user info then return deck from db
    User.findOne({_id : req.user.id})
        .then(user => {
            res.json ({
                deck : user.deck.cards
            });
        })
}

exports.addToDeck = (req,res,next) => {
    // check user info, check for duplicates then add to db if no duplicates

    const {name, imageUrl, convertedManaCost, power, toughness, cardText, cardId} = req.body;
    User.findOne({_id : req.user.id})
        .then(user => {
            const card = new Card(
                name,
                imageUrl,
                convertedManaCost,
                power,
                toughness,
                cardText,
                cardId,
            );
            const cardObject = card.classToObject();
            user.addToDeck(cardObject)
                .then(userInfo => {
                res.json({
                    deck : userInfo.deck.cards
                })
            });
        })
        .catch(err => console.log(err));
}

exports.removeFromDeck = (req,res,next) => {
    // filter out selected card then replace deck with new deck
    const {cardId} = req.body;
    User.findOne({_id : req.user.id})
        .then(user => {
            user.removeFromDeck(cardId)
            console.log(user);
        })
        .catch(err => console.log(err));
}

exports.clearDeck = (req,res,next) => {
    // clear out deck
}