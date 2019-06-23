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
    
};

userSchema.methods.clearDeck = function(){

};

// create methods to add to deck, delete card from deck, 

module.exports = mongoose.model("User", userSchema);