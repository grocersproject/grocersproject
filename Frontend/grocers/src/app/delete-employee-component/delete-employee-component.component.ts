import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from '../product.service.service';

@Component({
  selector: 'app-delete-employee-component',
  templateUrl: './delete-employee-component.component.html',
  styleUrls: ['./delete-employee-component.component.css']
})
export class DeleteEmployeeComponentComponent implements OnInit {
  msg?:string
  constructor(public router:Router,public proServ:ProductServiceService) { }

  ngOnInit(): void {
  }

  adminHomePage(){
    this.router.navigate(["/admin_dashboard"])
  }

  deleteEmp(empRef:any){
    this.proServ.deleteEmp(empRef).subscribe((data:string)=>{
      console.log(data)
      this.msg=data
      alert(this.msg)
    })
  }
}