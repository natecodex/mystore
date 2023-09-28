import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient){}

  
  
  getProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
  getProductsInCart() {
    const products = [
      {
        "name": "Phone XL",
        "description": "This is a normal descirption",
        "quantity": 1, "price": "GHS 12,000"
      }
    ];
    return products;
  }
  addProductToCart(product: any) {
    localStorage.setItem("Cart", product);
    console.log('product successfully added');
  }
}
