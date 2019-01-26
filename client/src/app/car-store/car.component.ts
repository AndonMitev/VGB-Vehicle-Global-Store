import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { CarState } from '../store/car/state';
import { Store } from '@ngrx/store';
import { GetAllCarsEffectAction } from '../store/car/actions';
import { AllCarsToken } from './tokens';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit {

  constructor(
    private store: Store<CarState>,
    @Inject (AllCarsToken)
    public allCars
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetAllCarsEffectAction())
  }

}
