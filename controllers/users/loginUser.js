const jwt = require("jsonwebtoken");
const userModel = require("../../models/userModel");
const bcrypt = require("bcrypt");

require("dotenv").config();


const loginUser = async(req,res) =>{
    const {email,password} = req.body;

    try {
        const user = await userModel.findOne({email});

        if(!user){
            return res.status(401).json({message : "user not found"});
        }

        const passwordMatch = await bcrypt.compare(password,user.password);
        if(!passwordMatch){
            return res.status(401).json({message:"invalid credential"});
        }

        const token = jwt.sign({
            userID:user._id,
            username:user.name},
            process.env.SECRET_KEY
        );

        res.status(200).json({message:"user login succesfull",user,token});
    } 
    catch (error) {
        res.status(401).json({message:error.message});
    }
}

module.exports = loginUser