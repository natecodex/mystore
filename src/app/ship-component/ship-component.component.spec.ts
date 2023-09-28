import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipComponentComponent } from './ship-component.component';

describe('ShipComponentComponent', () => {
  let component: ShipComponentComponent;
  let fixture: ComponentFixture<ShipComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipComponentComponent]
    });
    fixture = TestBed.createComponent(ShipComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
