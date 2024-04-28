const userModel = require("../../models/userModel");
const bcrypt = require('bcrypt');


const registerUser = async(req,res)=>{
    const {email,password,username} = req.body;

    try {
        const existingUser = await userModel.findOne({email});
        if(existingUser){
            return res.status(401).json({message:"user already logined"});
        }

        const hashedPassword = await bcrypt.hash(password,5);

        const newUser = userModel({
            email,
            username,
            password:hashedPassword
        });

        newUser.save();

        res.status(200).json({message:"user registered succesfully",newUser}); 
    } 
    catch (error) {
        res.status(401).json({message:error.message});
    }
}


module.exports = registerUser;