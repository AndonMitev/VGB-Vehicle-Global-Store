import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { CarRoutingModule } from './car-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AllCarsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CarRoutingModule
  ]
})
export class CarModule { }
