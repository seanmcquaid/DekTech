const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
    (username, password, done) => {
        User.findOne({username: username})
            .then(user => {
                if(!user) {
                    return done(null, false, {message : "no user found"})
                }
                if(user.checkPassword(password)){
                    return done(null, false, {message : "incorrect password"})
                }
            })
            .catch(err => done(err));
    }
)

module.exports = strategy;