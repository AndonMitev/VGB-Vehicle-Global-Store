import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AllCarsComponent } from './all-cars/all-cars.component';

const routes: Routes = [
  {
    path: 'all',
    component: AllCarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }