import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCarsComponent } from './cars/all-cars/all-cars.component';
import { CarRoutingModule } from './car-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { carReducer } from '../../store/car/reducer';
import { EffectsModule } from '@ngrx/effects';
import { CarEffects } from '../../store/car/effect';
import { CarComponent } from './cars/car.component';
import { SharedModule } from '../shared/shared.module';
import { CarFormComponent } from './create-car/car-form/car-form.component';
import { CreateCarComponent } from './create-car/create-car.component';

@NgModule({
  declarations: [AllCarsComponent, CarComponent, CarFormComponent, CreateCarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CarRoutingModule,
    SharedModule,
    StoreModule.forFeature('cars', carReducer),
    EffectsModule.forFeature([CarEffects])
  ],
  providers: []
})
export class CarModule { }
