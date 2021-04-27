import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(public http:HttpClient) { }

  storeProductDetails(productRef:any){
    this.http.post("http://localhost:9090/admin_dashboard/storeProductDetails/",productRef)
    .subscribe(res=>{console.log(res)},err=>{console.log(err)})
  }

  deleteProductByName(pname:any):any{
    return this.http.delete("http://localhost:9090/admin_dashboard/deleteProductByName/"+pname,{responseType:'text'})
  }

  updateProductDetails(productRef:any){
    return this.http.put("http://localhost:9090/admin_dashboard/updateProductDetails",productRef,{responseType:'text'})    
  }

  retrieveViewRequests():Observable<[]>{
    //change array of table if required and also change the API if it works
    return this.http.get<[]>("http://localhost:9090/employee/viewRequest/")
  }
}