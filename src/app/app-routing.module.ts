import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './main-features/product-list/product-list.component';
import { CheckoutComponent } from './main-features/checkout/checkout.component';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
