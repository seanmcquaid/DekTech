const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcryptjs");
const bcryptSalt = 12;

passport.use(
    "register", 
    new LocalStrategy({
        usernameField : "username",
        passwordField : "password"
    }, (username, password, done) => {
        User.findOne({username: username})
            .then(user => {
                if(user){
                    console.log("username already taken");
                    return done(null, false, {message : "user already exists"});
                } else {
                    bcrypt.hash(password, bcryptSalt).then(hashedPassword => {
                        const newUser = new User({
                            username : username,
                            password : hashedPassword
                        });
                        console.log("user created");
                        newUser.save();
                        return done(null, user, {message :"successfully registered"})
                    });
                }
            })
            .catch(err => {
                return done(err);
            });
        }
    )
);

passport.use(
    "login", 
    new LocalStrategy({
        usernameField : "username",
        passwordField : "password"
    }, (username, password, done) => {
        
    }
    )
)

module.exports = passport;