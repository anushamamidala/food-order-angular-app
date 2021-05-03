import { Component, OnInit } from '@angular/core';
import { Feed } from '../Model/feed';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Feed[] = [];
  constructor() { }

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cartItems'));
  }

}
