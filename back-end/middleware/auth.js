const config = require("../config");
const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
    const token = req.header("x-auth-token");
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
        res.status(400).json({
            message : "Token is not valid"
        })
    };
};