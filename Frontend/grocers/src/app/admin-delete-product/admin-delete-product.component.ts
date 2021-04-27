import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-admin-delete-product',
  templateUrl: './admin-delete-product.component.html',
  styleUrls: ['./admin-delete-product.component.css']
})
export class AdminDeleteProductComponent implements OnInit {
  msg?:string
  constructor(public router:Router,public proServ:ProductServiceService) { }

  ngOnInit(): void {
  }

  adminHomePage(){
    this.router.navigate(["/admin_dashboard"])
  }

  deleteProduct(pname:any){
    console.log(pname)
    this.proServ.deleteProductByName(pname).subscribe((res:string)=>{
      this.msg=res
      alert(this.msg)
    })
  }


}