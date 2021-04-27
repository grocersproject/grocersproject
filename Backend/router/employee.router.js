let express=require("express")
let router=express.Router()
let employeeController=require("../controller/employee.controller")

router.post("/storeRequest",employeeController.storeRequest)
router.get("/viewRequest",employeeController.getRequest)



module.exports=router