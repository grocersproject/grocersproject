let mongoose=require("mongoose")
mongoose.Promise=global.Promise

let adminEmployeeSchema=mongoose.Schema({
    first_name:String,
    last_name:String,
    email_id:String,
    password:String
    
})

let adminEmployeeModel=mongoose.model("adminEmployees",adminEmployeeSchema,"adminEmployees")

module.exports=adminEmployeeModel