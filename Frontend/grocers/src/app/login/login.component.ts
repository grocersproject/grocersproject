import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signUp(){
    this.router.navigate(["user"])
    }
    AdminSignUp(){
      this.router.navigate(["admin"])
    }
    EmployeeSignUp(){
      this.router.navigate(["employee"])
    }
}
