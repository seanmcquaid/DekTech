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
});

userSchema.methods = {
    checkPassword : function(inputPassword){
        return bcrypt.compareSync(inputPassword, this.password);
    },
    hashPassword : password => {
        return bcrypt.hashSync(password, 12)
    }
};

userSchema.pre("save", function(next) {
    this.password = this.hashPassword(this.password);
    next();
});

module.exports = mongoose.model("User", userSchema);