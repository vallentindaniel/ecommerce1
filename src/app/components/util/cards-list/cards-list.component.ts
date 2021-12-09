import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {

  @Input() items: any;

  @Input() designClass: string = "";


  constructor(
    private cartService: CartService
  ) {
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  addToWhishList(product: Product){
    //console.log("Added");
  }

  ngOnInit(): void {
  }

}
