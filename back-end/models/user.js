const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    deck : {
        cards : [
            {
                card : {
                    type : Object,
                    required : true,
                },
                quantity : {
                    type : Number,
                    required : true,
                }
            }
        ],
        lands : {
            type : Number,
            required : true,
        }
    },
});

userSchema.methods.addCardToDeck = function(card){
    const cardIndex = this.deck.cards.findIndex(searchCard => card === searchCard);
    if(cardIndex >= 0){
        return this.save();
    } else {
        this.deck.cards.push({
            card, 
            quantity : 1
        });
    }
    return this.save();
};

userSchema.methods.addLandsToDeck = function(numberOfLandsToAdd){
    // if lands added plus everything else is greater than or equal to 100, add lands up to 100
    if(numberOfLandsToAdd + this.deck.cards.length + this.deck.lands >= 100){
        return this.save();
    }
    this.deck.lands += numberOfLandsToAdd;
    return this.save();
}

userSchema.methods.removeFromDeck = function(cardId){
    const cardIndex = this.deck.cards.findIndex(searchCard => cardId === searchCard.card.cardId);
    if(cardIndex < 0){
        return this.save();
    } else {
        const filterDeck = this.deck.cards.filter(searchCard => cardId !== searchCard.card.cardId);
        this.deck.cards = filterDeck;
    }
    return this.save();
};

userSchema.methods.removeLandsFromDeck = function(numberOfLandsToRemove){
    // If number of lands is greater than current land amount, get rid of current land amount
}

userSchema.methods.clearDeck = function(){
    this.deck.cards = [];
    this.deck.lands = 0;
    return this.save();
};

module.exports = mongoose.model("User", userSchema);