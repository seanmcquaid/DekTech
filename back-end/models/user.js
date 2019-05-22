const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
})

userSchema.methods = {
    checkPassword : inputPassword => {
        return 
    }
}

module.exports = mongoose.model("User", userSchema);