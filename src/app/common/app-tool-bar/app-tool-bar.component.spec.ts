import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppToolBarComponent } from './app-tool-bar.component';

describe('AppToolBarComponent', () => {
  let component: AppToolBarComponent;
  let fixture: ComponentFixture<AppToolBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppToolBarComponent]
    });
    fixture = TestBed.createComponent(AppToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
