const User = require("../models/user");
const Card = require("../models/card");

exports.getDeck = (req,res,next) => {
    User.findOne({_id : req.user.id})
        .then(user => {
            console.log(user.deck)
            res.json ({
                cards : user.deck.cards,
                lands : user.deck.lands,
                commander : userInfo.deck.commander,
                message : ""
            });
        })
}

exports.addCardToDeck = (req,res,next) => {
    const {name, imageUrl, convertedManaCost, power, toughness, type, cardText, cardId} = req.body;
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
                type,
                cardText,
                cardId,
            );
            if(user.deck.cards.length + user.deck.lands === 100){
                return res.json({
                    cards : user.deck.cards,
                    lands : user.deck.lands,
                    commander : userInfo.deck.commander,
                    message : "You are at your 100 card limit"
                })
            }
            originalDeckLength = user.deck.cards.length;
            const cardObject = card.classToObject();
            return user.addCardToDeck(cardObject)
                    .then(userInfo => {
                        const message = userInfo.deck.cards.length === originalDeckLength ? "You already have this card in your deck!" : "Card added to deck";
                    return res.json({
                        cards : userInfo.deck.cards,
                        lands : userInfo.deck.lands,
                        commander : userInfo.deck.commander,
                        message,
                    })
                });
        })
        .catch(err => console.log(err));
}

exports.addLandsToDeck = (req,res,next) => {
    const {numberOfLandsToAdd} = req.body;
    let originalLandsAmount;
    User.findOne({_id : req.user.id})
        .then(user => {
            if(user.deck.cards.length + user.deck.lands === 100){
                return res.json({
                    cards : user.deck.cards,
                    lands : user.deck.lands,
                    commander : userInfo.deck.commander,
                    message : "You are at your 100 card limit"
                })
            }
            originalLandsAmount = user.deck.lands;
            return user.addLandsToDeck(numberOfLandsToAdd)
                        .then(userInfo => {
                            if(originalLandsAmount !== userInfo.deck.lands){
                                return res.json({
                                    cards : userInfo.deck.cards,
                                    lands : userInfo.deck.lands,
                                    commander : userInfo.deck.commander,
                                    message : "Added lands to deck"
                                })
                            } else {
                                return res.json({
                                    cards : userInfo.deck.cards,
                                    lands : userInfo.deck.lands,
                                    commander : userInfo.deck.commander,
                                    message : "You tried adding too many lands!",
                                })
                            }
                        });

        })
        .catch(err => console.log(err));
}

exports.removeCardFromDeck = (req,res,next) => {
    // filter out selected card then replace deck with new deck
    const {cardId} = req.body;
    User.findOne({_id : req.user.id})
        .then(user => {
            return user.removeFromDeck(cardId)
                    .then(userInfo => {
                        return res.json({
                            cards : userInfo.deck.cards,
                            lands : userInfo.deck.lands,
                            commander : userInfo.deck.commander,
                            message : "Card removed from deck"
                        })
                    });
        })
        .catch(err => console.log(err));
}

exports.removeLandsFromDeck = (req,res,next) => {
    const {numberOfLandsToRemove} = req.body;
    User.findOne({_id : req.user.id})
        .then(user => {
            return user.removeLandsFromDeck(numberOfLandsToRemove)
                        .then(userInfo => {
                            return res.json({
                                cards : userInfo.deck.cards,
                                lands : userInfo.deck.lands,
                                commander : userInfo.deck.commander,
                                message : "Lands removed from deck"
                            })
                        })
        })
        .catch(err => console.log(err));
}

exports.setCommander = (req,res,next) => {
    const {cardInfo} = req.body;
    User.findOne({_id : req.user.id})
        .then(user => {
            return user.setCommander(cardInfo)
                        .then(userInfo => {
                            return res.json({
                                cards : userInfo.deck.cards,
                                lands : userInfo.deck.lands,
                                commander : userInfo.deck.commander,
                                message : "Commander set!"
                            })
                        })
        })
        .catch(err => console.log(err))
}

exports.removeCommander = (req,res,next) => {
    User.findOne({_id : req.user.id})
        .then(user => {
            return user.removeCommander()
                        .then(userInfo => {
                            return res.json({
                                cards : userInfo.deck.cards,
                                lands : userInfo.deck.lands,
                                commander : userInfo.deck.commander,
                                message : "Commander removed"
                            })
                        })
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
                            lands : userInfo.deck.lands,
                            commander : userInfo.deck.commander,
                            message : "Deck cleared"
                        })
                    });
        })
        .catch(err => console.log(err));
}