const config = require("../config");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const token = req.header("x-auth-token");
    // console.log(token)
    if(!token){
        return res.json({
            token : null,
            message : "No valid token found",
            isAuthenticated : false,
            deck : {
                cards : [],
                lands : 0,
                commander : "",
                message : "",
            }
        });
    };
    
    try {
        const decodedToken = jwt.verify(token, config.jwtSecret);
        req.user = decodedToken;
        next();
    } catch(err){
        return res.json({
            token : null,
            message : "Expired token",
            isAuthenticated : false,
            deck : {
                cards : [],
                lands : 0,
                commander : "",
                message : "",
            }
        })
    };
};

module.exports = auth;