import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  homePage(){
    this.router.navigate(["/admin"])
  }

  addProduct(){
    this.router.navigate(["/addProduct"])
  }

  deleteProduct(){
    this.router.navigate(["/deleteProduct"])
  }

  updateProduct(){
    this.router.navigate(["/productUpdate"])
  }

  viewRequest(){
    this.router.navigate(["/employeeViewRequest"])
  }

  addEmp(){
    this.router.navigate(["/add-emplyee"])
  }

  deleteEmp(){
    this.router.navigate(["/delete-emp"])
  }
}