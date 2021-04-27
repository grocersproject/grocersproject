let adminModel=require("../model/admin.model.js")


let storeProductDetails=(req,res)=>{
    let product=new adminModel({
        // _id:req.body.pid,
        pname:req.body.pname,
        price:req.body.price,
        pquantity:req.body.pquantity
    })

    product.save((err,result)=>{
        if(!err){
            console.log(result)
            res.send("Record stored successfully")
        }else{
            res.send("error in storing data" + err)
        }
    })
}


let deleteProductByName=(req,res)=>{
    let pname=req.params.pname
    adminModel.deleteOne({pname:pname},(err,result)=>{
        if(!err){
            if(result.deletedCount>0){
                res.send("Product deleted Successfully")
            }else{
                res.send("No such Product available")
            }
        }else{
            res.send("Error generated" + err)
        }
    })
}

let viewRequest=(req,res)=>{
    adminModel.find({},(err,result)=>{
        if(!err){
            res.json(result)
        }
    })
}

let updateProductByName=(req,res)=>{
    let name=req.body.pname
    let updatedprice=req.body.price
    let updatedpquantity=req.body.pquantity

    adminModel.updateMany({pname:name},{$set:{price:updatedprice,pquantity:updatedpquantity}},(err,result)=>{
        if(!err){
            if(result.nModified>0){
                    res.send("Product updated succesfully")
            }else {
                    res.send("No such Product");
            }
        }else {
            res.send("Error generated "+err);
        }
    })
}

module.exports={storeProductDetails,deleteProductByName,updateProductByName, viewRequest}