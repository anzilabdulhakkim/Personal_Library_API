const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title:{type:String , required : true},
    price:{type:String , required:true},
    userId:{type: String , required :true},
    author:{type:String , required : true}
})

const bookModel = mongoose.model('book',bookSchema)

module.exports = bookModel;