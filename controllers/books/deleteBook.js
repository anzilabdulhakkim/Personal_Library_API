const bookModel = require('../../models/bookModel');

const deleteBook = async(req,res)=>{
    const {id} = req.params;
    try {
        const deleteBook  = await bookModel.findByIdAndDelete(id);
        res.status(200).json({message:"book deleted",deleteBook});
    } 
    catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = deleteBook