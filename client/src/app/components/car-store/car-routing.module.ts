import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarComponent } from './car/cars/car.component';

const routes: Routes = [
  {
    path: 'all',
    component: CarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }