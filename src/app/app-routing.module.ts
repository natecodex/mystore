import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './main-features/product-list/product-list.component';
import { CheckoutComponent } from './main-features/checkout/checkout.component';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundErrorComponent } from './common/not-found-error/not-found-error.component';
import { ProductDetailComponent } from './main-features/product-detail/product-detail.component';
import { MyCartsComponent } from './main-features/my-carts/my-carts.component';
import { RegistrationComponent } from './common/registration/registration.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'product/:id/:prod_title', component: ProductDetailComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'my-carts', component: MyCartsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '**', component: NotFoundErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
