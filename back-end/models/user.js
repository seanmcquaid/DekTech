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
                    type : Schema.types.ObjectId,
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

// create methods to add to deck

module.exports = mongoose.model("User", userSchema);