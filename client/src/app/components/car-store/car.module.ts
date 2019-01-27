import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCarsComponent } from './car/cars/all-cars/all-cars.component';
import { CarRoutingModule } from './car-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { carReducer } from '../../store/car/reducer';
import { EffectsModule } from '@ngrx/effects';
import { CarEffects } from '../../store/car/effect';
import { CarComponent } from './car/cars/car.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AllCarsComponent, CarComponent],
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
