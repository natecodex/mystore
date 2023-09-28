import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent {
@Input() ListTitle = '';
@Input() products = [];
@Output() share = new EventEmitter();


onShare(product: any) {
  console.log("child-component: selected product", product)
  this.share.emit(product);
}

}
