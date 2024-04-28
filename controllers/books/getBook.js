const bookModel = require('../../models/bookModel');

const getBook = async(req,res)=>{
    const limit = req.query.limit || 5;
    const page = req.query.page || 1;
    const skip = limit*(page-1);

    try {
        const Book = new bookModel.find().skip(skip).limit(limit);
        res.json({Book})
    } 
    catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = getBook