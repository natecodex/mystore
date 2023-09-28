import { HttpErrorResponse } from '@angular/common/http';
import { AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:any = [];
  numOfShares = 0;
  userName = "Nathaniel";
  isDisabled = false;
  isClicked = false;
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    private productsService: ProductsService,
    private snackbar: MatSnackBar
    ) {}

  ngOnInit(): void {
    this.onFetchProduct();
  
    // console.error("Component Initialised")
  }
  onFetchProduct(){
    this.isLoading = true;
    this.productsService.getProducts().subscribe({
      next: (response) => {
        this.isLoading = false;
        this.products = response;
      },
      error:(error:HttpErrorResponse) => {
        this.isLoading = false;
        if (error.status >=500 && error.status < 600){
          this.snackbar.open("An error occurred when processing your request");
        } else if (error.status ===404){
          this.snackbar.open("Sorry, we couldn't find your product(s)");

        }else if (error.status ===401){
          this.snackbar.open("You are not authenticated to have access to this resource");
        }else if (error.status ===400){
          this.snackbar.open("Sorry, you made the wrong input");
        }else{
          this.snackbar.open("An error occurred when processing your request. Please chech your internet");
        }
      
      }
    });

  }

  
  onShare(product: any) {
    console.log("Parent-Component: received product", product);
    alert(`${product.name} successfully shared`);
  }

  addProductToCart(product: any) {
    this.productsService.addProductToCart(product);

  }

  onClick() {
    this.isClicked = !this.isClicked;
  }
}
