import { Component, OnInit } from '@angular/core';
import { ProductCart } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  constructor(
    public cartService: CartService
  ) { }

  editItemQuantity(item: ProductCart, q: number){
    this.cartService.editItemQuantity(item, q);
  }

  removeItem(item: ProductCart){
    this.cartService.removeItem(item);
  }

  ngOnInit(): void {
  }

}
