import { Component, OnInit } from '@angular/core';
import { Feed } from '../Model/feed';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Feed[] = [];
  totalPrice:any;
  constructor() { }

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.totalPrice = 0;
    if(this.cartItems.length > 0){
      for(let i = 0; i< this.cartItems.length;i++){
        this.totalPrice += this.cartItems[i].price.price;
      }
    }
    
  }

}
