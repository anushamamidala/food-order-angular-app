import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Feed } from '../Model/feed';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {
  @Input() feed: Feed;
  selectedItem: Feed;
  @ViewChild('closebutton') closebutton;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.feed)
  }

  addToCart(){
    let items = localStorage.getItem('cartItems');
    let cartItems = items ? JSON.parse(localStorage.getItem('cartItems')) : [];
    cartItems.push(this.feed)
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
    this.closebutton.nativeElement.click();
  }

  addToCartItem(){
    this.selectedItem = this.feed;
  }

  onCloseClick(){
    this.selectedItem = null;
  }
}
