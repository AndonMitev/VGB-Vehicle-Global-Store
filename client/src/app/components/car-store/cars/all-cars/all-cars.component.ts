import { Component, Input, AfterViewInit } from '@angular/core';
import { AllCarsModel } from 'src/app/core/models/car/get-all-cars';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss'],
})
export class AllCarsComponent {
  @Input() carData: AllCarsModel;
}
