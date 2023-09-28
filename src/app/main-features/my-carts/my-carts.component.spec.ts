import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartsComponent } from './my-carts.component';

describe('MyCartsComponent', () => {
  let component: MyCartsComponent;
  let fixture: ComponentFixture<MyCartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCartsComponent]
    });
    fixture = TestBed.createComponent(MyCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
