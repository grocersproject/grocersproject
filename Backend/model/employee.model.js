let mongoose=require("mongoose")
mongoose.Promise=global.Promise

let employeeSchema=mongoose.Schema({
    // _id:Number,
    request:String,
    
})

let employeeModel=mongoose.model("employees",employeeSchema,"employees")

module.exports=employeeModel