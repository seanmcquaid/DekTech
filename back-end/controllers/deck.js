const User = require("../models/user");
const Card = require("../models/card");

exports.getDeck = (req,res,next) => {
    User.findOne({_id : req.user.id})
        .then(user => {
            console.log(user)
            res.json ({
                cards : user.deck.cards,
                message : ""
            });
        })
}

exports.addToDeck = (req,res,next) => {
    const {name, imageUrl, convertedManaCost, power, toughness, cardText, cardId} = req.body;
    let originalDeckLength;
    // check to see if length changed in then statement after adding to deck;
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
            if(user.deck.cards.length === 100){
                return res.json({
                    cards : user.deck.cards,
                    message : "You are at your 100 card limit"
                })
            }
            originalDeckLength = user.deck.cards.length;
            const cardObject = card.classToObject();
            return user.addToDeck(cardObject)
                    .then(userInfo => {
                        let message;
                        if(userInfo.deck.cards.length === originalDeckLength){
                            message = "You already have this card in your deck!"
                        } else {
                            message = "Card added to deck"
                        }
                    return res.json({
                        cards : userInfo.deck.cards,
                        message,
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
            return user.removeFromDeck(cardId)
                    .then(userInfo => {
                        return res.json({
                            cards : userInfo.deck.cards,
                            message : "Card removed from deck"
                        })
                    });
        })
        .catch(err => console.log(err));
}

exports.clearDeck = (req,res,next) => {
    User.findOne({_id : req.user.id})
        .then(user => {
            return user.clearDeck()
                    .then(userInfo => {
                        // console.log(userInfo)
                        res.json({
                            cards : userInfo.deck.cards,
                            message : "Deck cleared"
                        })
                    });
        })
        .catch(err => console.log(err));
}