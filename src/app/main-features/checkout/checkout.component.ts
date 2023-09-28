import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Input() fullName = '';
  @Output() fullNameChange = new EventEmitter<any>();
  newFullName = 'Caleb';
  firstName = '';
  lastName = '';
  adline1 ='';
  adline2 ='';
  city ='';
  spr ='';
  zp ='';
  ct ='';
  


  ngOnInit(): void {
    
  }

  onFullNameChanged(newName: any) {
    // this.fullName = newName;
    this.fullNameChange.emit(newName)
    console.log(newName);
  }
  newFullNameChanged(newName: any) {
    this.newFullName = newName;
    console.log("new change received in typescript", newName);
  }
}
