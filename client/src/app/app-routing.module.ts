import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'car',
    loadChildren: './components/car-store/car/car.module#CarModule'
  },
  {
    path: 'authentication',
    loadChildren: './components/authentication/authentication.module#AuthenticationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
