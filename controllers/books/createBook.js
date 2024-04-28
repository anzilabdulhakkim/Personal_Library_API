const bookModel = require('../../models/bookModel');

const createBook = async(req,res)=>{
    const {title,price,userID,author} = req.body;
    try {
        const newBook = new bookModel({title,price,userID,author});
        newBook.save();
        res.status(200).json({message:"new book created",newBook});
    } 
    catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = createBook