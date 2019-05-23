const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const User = require("../models/user");

passport.serializeUser((user, done) => {
    console.log(user)
    done(null, {_id : user._id});
});

passport.deserializeUser((id, done) => {
    User.findOne({_id: id})
        .then(user => {
            done(null, user);
        })
        .catch(err => done(err));
})

passport.use(LocalStrategy);

module.exports = passport;