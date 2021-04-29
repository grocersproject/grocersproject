let express=require("express")
let router=express.Router()
let employeeController=require("../controller/employee.controller")

router.post("/storeRequest",employeeController.storeRequest)
router.get("/viewRequest",employeeController.getRequest)

router.post("/add-emp-details",employeeController.addempdetails)
router.delete("/delete_emp_by_email/:email_id",employeeController.deleteempbyemailid)

module.exports=router