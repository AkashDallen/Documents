const {Schema,default:mongoose}=require("mongoose");
const Book= new Schema({
    isbn:{required:true ,type:String,unique:true},
    name:{required:true,type:String},

});
module.exports=mongoose.model('book',Book);