import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';




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

  add_emp_details(empRef:any){
    this.http.post("http://localhost:9090/employee/add-emp-details/",empRef)
    .subscribe(res=>{console.log(res)},err=>{console.log(err)})
  }

  deleteEmp(email_id:any):any{
    return this.http.delete("http://localhost:9090/employee/delete_emp_by_email/"+email_id,{responseType:'text'})
  }
  signIn(data):Observable<any>{
    return this.http.post<any>("http://localhost:9090/user/signIn",data)
  }
  signUp(data):Observable<any>{
    return this.http.post<any>("http://localhost:9090/user/signup",data,{headers:this.getHeaders()})
    
  }
  getHeaders() {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    })
    return headers
  }
  handleError(error) {
    let errorMessage = '';
    if (error.eror instanceof ErrorEvent) {
      errorMessage = `error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}