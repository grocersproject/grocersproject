import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
  function doPayment(cart:any) {
		this.myCart = {totalPrice: 0};
		alert("Your payment of  "+cart.totalPrice+ "is successfull");
		this.router.navigate(['/login']);
	}



