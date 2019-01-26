import { Component, OnInit, ChangeDetectionStrategy, Input, AfterViewInit } from '@angular/core';
import { GetAllCarsService } from 'src/app/core/services/cars/get-all-cars.service';
import { Store } from '@ngrx/store';
import { GetAllCarsEffectAction } from 'src/app/store/car/actions';
import { CarState } from 'src/app/store/car/state';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllCarsComponent implements OnInit, AfterViewInit {
  @Input() carData

  constructor() { }



  ngOnInit() {
    console.log(this.carData);
  }

  ngAfterViewInit() {
    console.log(this.carData);
  }

}
