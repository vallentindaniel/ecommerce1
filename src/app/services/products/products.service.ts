
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/interfaces';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productsCollection: AngularFirestoreCollection<Product>;
  products: Observable<Product[]>;

  constructor(
    private afs: AngularFirestore,
  ) {
    this.productsCollection = afs.collection<Product>('products');
    this.products = this.productsCollection.valueChanges({ idField: 'productID' });
  }

  getProducts2(){
    return this.products.pipe( map((res:Product[]) =>{
      return res;
    } ));
  }

  public getProducts(): Observable<Product[]>{
    return this.products;
  }

  getProduct(id: string):Observable<Product[]>{
    const prd = this.afs.collection<Product>('products', ref => ref.where('path', '==', id));
    return prd.valueChanges({ idField: 'productID' });
  }

  addProduct(product: Product){
    this.productsCollection.add(product);
  }

  editProduct(id: string, product: Product){
    const prd = this.afs.doc<Product>('products/'+ id);
    prd.update(product); // update product
  }

  deleteProduct(id: string){
    const prd = this.afs.doc<Product>('products/'+ id);
    prd.delete(); // delete product
  }


}
