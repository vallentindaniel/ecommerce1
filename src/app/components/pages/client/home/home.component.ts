import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/interfaces';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public slides = [

    {
      src: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
      tag: "products",
      message: "Prinde reducerile momentului"
    },
    {
      src: "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg",
      tag: "products",
      message: "Prinde reducerile momentului"
    },
    {
      src: "https://www.enjpg.com/img/2020/cool-pictures-for-57.jpg",
      tag: "products",
      message: "Prinde reducerile momentului"
    }
  ];

  products: Observable<Product[]>;


  constructor(
    private productsService: ProductsService,
  ) {
    this.products =  productsService.getProducts();
  }

  ngOnInit(): void {
  }

}
