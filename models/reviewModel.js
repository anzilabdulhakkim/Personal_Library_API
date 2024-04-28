const mongoose = require("mongoose")

const reviewSchema = mongoose.Schema({
    book :{type:mongoose.Schema.Types.ObjectId,ref:'book',required:true},
    user :{type:mongoose.Schema.Types.ObjectId,ref:'user',required:true},
    text :{type:String , required : true},
    rating : {type:number ,min:1,max:10,required : true}
})

const reviewModel = mongoose.model('review',reviewSchema)

module.exports = reviewModel;