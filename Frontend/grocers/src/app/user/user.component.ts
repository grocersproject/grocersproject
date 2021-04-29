import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductServiceService } from '../product.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  signUp : FormGroup;
  signIn : FormGroup;
  signUpEnable: boolean;
  signInEnable: boolean;
  constructor(private fg:FormBuilder, private user:ProductServiceService, public router:Router) { 
    this.signUp = this.fg.group({
      name : ['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.required]
    })
    this.signIn = this.fg.group({
      email : ['',Validators.required],
      password : ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  homePage(){
    this.router.navigate(["/"])
  }
  signupEnable(){
    this.signUpEnable = true;
    this.signInEnable = false;
  }
  signinEnable(){
    this.signInEnable = true;
    this.signUpEnable = false;
  }
onSignUp(){
 // console.log(this.signUp.value);
 if(this.signUp.value){
   this.user.signUp(this.signUp.value).subscribe(data=>{
     console.log(data)
     this.signUpEnable = false;
     this.signInEnable = true;
   })

 }
}
onSignin(){
if(this.signIn.value){
  this.user.signIn(this.signIn.value).subscribe(data=>{
    console.log(data)
    this.router.navigate(["/dashboardUser"])
  })
}
}
}