import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CarState } from '../../store/car/state';
import { Store } from '@ngrx/store';
import { GetAllCarsEffectAction } from '../../store/car/action';
import { CarsBehavior } from './map-to-view-model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarComponent implements OnInit {
  constructor(
    private store: Store<CarState>,
    public carsBehavior: CarsBehavior
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetAllCarsEffectAction())
  }
}
