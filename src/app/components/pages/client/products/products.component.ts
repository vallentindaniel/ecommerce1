import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Category, Product } from 'src/app/interfaces/interfaces';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Observable<Product[]>;
  productList: any;
  public filterCategory: any;

  public categories: Observable<Category[]>;



  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService
    ) {
    this.products =  productsService.getProducts();
    this.categories = categoriesService.getCategories();
  }


  filter(categoryID: string){
    this.filterCategory = this.productList.filter( (a:any)=>{
      if(a.category_id == categoryID || categoryID == ''){
        return a;
      }
    })
  }


  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      res =>{
        this.productList = res;
        this.filterCategory = res;
      }
    );
  }

}
