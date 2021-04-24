import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  msg:string
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  collectData(loginRef:any){
    console.log(loginRef)
    if(loginRef.user=="admin" && loginRef.pass=="admin123"){
      this.router.navigate(["/admin_dashboard"])
    }
    else{
      this.msg="Incorrect Credentials"
      alert(this.msg);
    }
  }

  homePage(){
    this.router.navigate(["/"])
  }
}