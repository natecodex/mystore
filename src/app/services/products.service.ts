import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient){}
  private apiUrl = 'https://fakestoreapi.com/products';
  
  
  getProducts() {
    return this.http.get('https://fakestoreapi.com/products');

  }
  getProductById(id) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
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
 
  getProductDetails(productId: string): Observable<any> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<any>(url);
  }

}
