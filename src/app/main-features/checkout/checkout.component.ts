import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  @Input() fullName = '';
  @Output() fullNameChange = new EventEmitter<any>();
  newFullName = 'Nathaniel';
  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      adline1: ['', Validators.required],
      adline2: [''],
      city: ['', Validators.required],
      spr: ['', Validators.required],
      zp: ['', Validators.required],
      ct: ['', Validators.required]
    });
  }


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
