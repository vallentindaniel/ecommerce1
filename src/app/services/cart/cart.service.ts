import { Injectable } from '@angular/core';
import { Product, ProductCart } from 'src/app/interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ProductCart[] = [];
  subtotal: number = 0;
  countItems: number = 0;

  constructor() {
    const items = localStorage.getItem("items");
    if (items) {
      this.items = JSON.parse(items);
    }
    this.setSubtotal();

  }

  getLenght(){
    return this.countItems;
  }

  addToCart(product: Product) {
    if (!this.items.find(s => { s.product == product })) {
      this.items.push({ product: product, quantity: 1 });
      this.setSubtotal();
      localStorage.setItem("items", JSON.stringify(this.items));
      return 1;
    }else {
      return 0;
    }
  }

  getItems() {
    return this.items;
  }

  setSubtotal(){
    if(this.items){ // if car is not empty calculate subtotal
      this.subtotal = 0;
      this.countItems = 0;
      this.items.forEach(item =>{
        this.subtotal += item.product.price * item.quantity;
        this.countItems++;
      });
    }
  }

  getSubtotal(){
    return this.subtotal;
  }

  editItemQuantity(item: ProductCart, q: number) {
      let index = this.items.indexOf(item); // find item
      let max_quantity = this.items[index].product.quantity;
      let quantity = this.items[index].quantity;
      //console.log(max_quantity);
      if((quantity > 1 || q > 0 )  && (quantity < max_quantity || q < 0 ) ){
        // edit just if quantity > 1 or quantity < max_quantity
        this.items[index].quantity += q;
        this.setSubtotal();
      }

      localStorage.setItem("items", JSON.stringify(this.items));
  }

  removeItem(item: ProductCart) {

    let index = this.items.findIndex( i => i == item);
    this.items.splice(index, 1);
    this.setSubtotal();

    localStorage.setItem("items", JSON.stringify(this.items) );
  }

  clearCart() {
    this.items = [];
    localStorage.setItem("items", JSON.stringify(this.items));
    return this.items;
  }

}
