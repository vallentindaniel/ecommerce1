import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/interfaces';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Observable<Product[]>;
  id: string = ""; // path
  active_nav = 1;


  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {
    this.id = this.route.snapshot.params.id;
    this.product = productsService.getProduct(this.id);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  addToWhishlist(product: Product) {

  }

  ngOnInit(): void {
  }

}
