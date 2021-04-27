import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-admin-view-request',
  templateUrl: './admin-view-request.component.html',
  styleUrls: ['./admin-view-request.component.css']
})
export class AdminViewRequestComponent implements OnInit {
  product?:[]    //change array of table if required

  constructor(public router:Router, public proServ:ProductServiceService) { }

  ngOnInit(): void {
    this.proServ.retrieveViewRequests().subscribe(res=>this.product=res)
    console.log(this.product)
  }


  adminHomePage(){
    this.router.navigate(["/admin_dashboard"])
  }
}