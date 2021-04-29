import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-add-employee-component',
  templateUrl: './add-employee-component.component.html',
  styleUrls: ['./add-employee-component.component.css']
})
export class AddEmployeeComponentComponent implements OnInit {

  constructor(public router:Router,public proServ:ProductServiceService) { }

  ngOnInit(): void {
  }

  adminHomePage(){
    this.router.navigate(["/admin_dashboard"])
  }

  addEmp(empRef:any){
    this.proServ.add_emp_details(empRef)
    alert("Record Added Successfully")
  }
}