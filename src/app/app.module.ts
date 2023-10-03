import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppToolBarComponent } from './common/app-tool-bar/app-tool-bar.component';
import { ProductListComponent } from './main-features/product-list/product-list.component';
import { ProductDetailComponent } from './main-features/product-detail/product-detail.component';
import { FooterComponent } from './common/footer/footer.component';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { ProductListItemComponent } from './common/product-list-item/product-list-item.component';
import { MyCartsComponent } from './main-features/my-carts/my-carts.component';
import { CheckoutComponent } from './main-features/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ShipComponentComponent } from './ship-component/ship-component.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundErrorComponent } from './common/not-found-error/not-found-error.component';



@NgModule({
  // registering view classes (Components, Pipes, Directives, etc.) within our application
  declarations: [
    AppComponent,
    AppToolBarComponent,
    ProductListComponent,
    ProductDetailComponent,
    FooterComponent,
    ProductListItemComponent,
    MyCartsComponent,
    CheckoutComponent,
    FooterComponent,
    HeaderComponent,
    CarouselComponent,
    ShipComponentComponent,
    LoginComponent,
    NotFoundErrorComponent
  ],
  // register modules in your application
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    
    
  
  
  
  ],
  // register services in your application
  providers: [],
  // registering root component in your application
  bootstrap: [AppComponent]
})
export class AppModule { }
