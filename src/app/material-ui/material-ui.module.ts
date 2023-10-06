import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { MatSliderModule } from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';





const modules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatStepperModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  CarouselModule,
  MatSnackBarModule,
  BrowserAnimationsModule,
  BrowserModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule

  
  

]
@NgModule({
  imports: [
    CommonModule,

    ...modules
  ],
  exports: modules
})
export class MaterialUiModule { }
