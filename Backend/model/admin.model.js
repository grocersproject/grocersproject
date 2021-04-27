let mongoose=require("mongoose")
mongoose.Promise=global.Promise

let adminSchema=mongoose.Schema({
    // _id:Number,
    pname:String,
    price:Number,
    pquantity:Number
})

let adminModel=mongoose.model("",adminSchema,"admin")

module.exports=adminModel