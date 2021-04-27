let employeeModel=require("../model/employee.model.js")

let storeRequest=(req,res)=>{
    let employeeRequest=new employeeModel({
        // _id:req.body.pid,
        request:req.body.request
    })

    employeeRequest.save((err,result)=>{
        if(!err){
            console.log(result)
            res.send("Record stored successfully")
        }else{
            res.send("error in storing data" + err)
        }
    })
}


let getRequest=(req,res)=>{
    employeeModel.find({},(err,result)=>{
        if(!err){
            res.json(result)
        }
    })

}

module.exports={storeRequest,getRequest}
// module.exports={getRequest}