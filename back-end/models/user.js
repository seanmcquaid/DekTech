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
        ]
    },
});

userSchema.methods.addToDeck = function(card){
    const cardIndex = this.deck.cards.findIndex(searchCard => card === searchCard);
    if(cardIndex >= 0){
        return null;
    } else {
        this.deck.cards.push({
            card, 
            quantity : 1
        });
    }
    return this.save();
};

userSchema.methods.removeFromDeck = function(cardId){
    console.log(cardId)
    const cardIndex = this.deck.cards.findIndex(searchCard => {
        console.log(searchCard)
        return cardId === searchCard.card.cardId;
    });
    console.log(cardIndex);
    if(cardIndex < 0){
        return null;
    } else {
        const filterDeck = this.deck.cards.filter(searchCard => cardId !== searchCard.card.cardId);
        console.log(filterDeck);
        this.deck.cards = filterDeck;
    }
    return this.save();
};

userSchema.methods.clearDeck = function(){
    this.deck.cards = [];
    return this.save();
};

module.exports = mongoose.model("User", userSchema);