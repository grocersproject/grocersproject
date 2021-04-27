let express=require("express")
let router=express.Router()
let adminController=require("../controller/admin.controller")

router.post("/storeProductDetails",adminController.storeProductDetails)
router.delete("/deleteProductByName/:pname",adminController.deleteProductByName)
router.put("/updateProductDetails",adminController.updateProductByName)


module.exports=router