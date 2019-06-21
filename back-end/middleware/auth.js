const config = require("../config");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.header("x-auth-token");
    // console.log(token)
    if(!token){
        return res.status(401).json({
            message : "No token, access denied!"
        });
    };
    
    try {
        const decodedToken = jwt.verify(token, config.jwtSecret);

        req.user = decodedToken;
        next();
    } catch(err){
        console.log()
        res.status(400).json({
            token : null,
            message : "Expired token",
            isAuthenticated : false,
            userInfo : null,
        })
    };
};

module.exports = auth;