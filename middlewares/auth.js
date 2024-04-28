const jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    let token = req.headers.authorization?.split(" ")[1];
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            req.body.userID = decoded.userID;
            req.body.name = decoded.name;
            next();
        });
    }
    else{
        res.status(401).json({message:"token not found!"});
    }
}

module.exports = auth;