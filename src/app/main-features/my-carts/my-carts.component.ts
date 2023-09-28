import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-my-carts',
  templateUrl: './my-carts.component.html',
  styleUrls: ['./my-carts.component.scss']
})
export class MyCartsComponent {
  cartProducts = [];
  //fullName = "Nathaniel";
  constructor(private productsService: ProductsService){}

  addProductCart(product: any) {
    this.productsService.addProductToCart(product);
  }
}
