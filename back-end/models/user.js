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
                cardId : {
                    type : Schema.Types.ObjectId,
                    ref : "Card",
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

};

userSchema.methods.removeFromDeck = function(cardId){
    
};

userSchema.methods.clearDeck = function(){

};

// create methods to add to deck, delete card from deck, 

module.exports = mongoose.model("User", userSchema);