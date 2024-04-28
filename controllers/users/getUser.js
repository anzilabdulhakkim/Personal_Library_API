const userModel = require('../../models/userModel')

const getUser = async (req,res)=>{
    try {
        const users = await userModel.find();
        res.json({users});
    } 
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = getUser;