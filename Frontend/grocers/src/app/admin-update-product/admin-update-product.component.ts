import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-admin-update-product',
  templateUrl: './admin-update-product.component.html',
  styleUrls: ['./admin-update-product.component.css']
})
export class AdminUpdateProductComponent implements OnInit {
  msg?:string
  constructor(public router:Router,public proServ:ProductServiceService) { }

  ngOnInit(): void {
  }

  adminHomePage(){
    this.router.navigate(["/admin_dashboard"])
  }

  updateProduct(productRef:any){
    console.log(productRef)
    this.proServ.updateProductDetails(productRef).subscribe(res=>{
      this.msg=res
      alert(this.msg)
    })
  }
}