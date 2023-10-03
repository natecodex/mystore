import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productName = '';
  productId = '';
  productDesc = '';
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ){}
ngOnInit(): void {
  this.route.params.subscribe(param =>{
    this.productName = param["prod_title"];
    this.productId = param["id"];
    this.getProductDetail(this.productId);
  });
  this.route.queryParams.subscribe(queryparam => { 
    this.productDesc = queryparam["desc"]
  })
}

getProductDetail(id) {
  this.productsService.getProductById(id).subscribe(resp => {
    console.log(resp);
  });
    
}

}
