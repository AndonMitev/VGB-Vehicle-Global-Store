import { Injectable, Inject } from "@angular/core";
import { CarState } from '../../../../store/car/state';
import { Store, select } from '@ngrx/store';
import { allCarsSelector } from '../../../../store/car/selector';

@Injectable({
  providedIn: 'root'
})
export class CarsBehavior {
  public allCarsModel$: any

  constructor(
    private store: Store<CarState>
  ) {
    this.allCarsModel$ = this.store
      .pipe(
        select(allCarsSelector))
  }
}