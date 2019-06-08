const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    cardName :{
        type : String,
        required : true,
    },
    cardId : {
        type : Number,
        required : true,
    }, 
    cardType : {
        type : String,
        required : true,
    },
    imageUrl : {
        type : String,
        required : true,
    },
    cardEffect : {
        type : String,
        required : true,
    },
    convertedManaCost : {
        type : Number,
        required : true,
    },
});

module.exports = mongoose.model("Card", cardSchema);