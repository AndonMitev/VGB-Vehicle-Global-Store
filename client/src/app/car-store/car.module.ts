import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { CarRoutingModule } from './car-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, select, Store } from '@ngrx/store';
import { CarState } from '../store/car/state';
import { carReducer } from '../store/car/reducer';
import { EffectsModule } from '@ngrx/effects';
import { CarEffects } from '../store/car/effect';
import { CarComponent } from './car.component';
import { AllCarsToken } from './tokens';
import { allCarsSelector } from '../store/car/selector';

@NgModule({
  declarations: [AllCarsComponent, CarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CarRoutingModule,
    StoreModule.forFeature(CarState.stateName, carReducer),
    EffectsModule.forFeature([CarEffects])
  ],
  providers: [
    {
      provide: AllCarsToken,
      useFactory: store => store.pipe(select(allCarsSelector)),
      deps: [Store]
    }
  ]
})
export class CarModule { }
