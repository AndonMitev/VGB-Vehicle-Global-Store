import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GetAllCarsEffectAction, GetAllCarsEffect, SaveAllCarsAction } from './actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { GetAllCarsService } from 'src/app/core/services/cars/get-all-cars.service';
import { CarState } from './state';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarEffects {

  @Effect()
  getAllCars = this.actions$
    .pipe(
      ofType<GetAllCarsEffectAction>(GetAllCarsEffect),
      switchMap(() => this.carService.getAllCars()
        .pipe(
          map(response => new SaveAllCarsAction(response)),
        )
      )
    )

  constructor(
    private actions$: Actions,
    private carService: GetAllCarsService,
    private store: Store<CarState>) { }
}