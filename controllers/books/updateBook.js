const bookModel = require('../../models/bookModel');

const updateBook = async(req,res)=>{
    const{id} = req.body;
    const{userID} = req.body;
    try {
        const updateBook = await bookModel.findByIdAndUpdate(id,req.body,{userID});
        res.status(200).json({message:"book has been updated",updateBook})
    } 
    catch (error) {
        res.status(401).json({message:error.message})
    }
}

module.exports = updateBook