import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  adminPage(){
    this.router.navigate(["/admin"])
  }

  userPage(){
    this.router.navigate(["/User"])
  }

  employeePage(){
    this.router.navigate(["/employee"])
  }
}