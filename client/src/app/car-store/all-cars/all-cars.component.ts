import { Component, OnInit } from '@angular/core';
import { GetAllCarsService } from 'src/app/core/services/cars/get-all-cars.service';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit {

  constructor(
    private carServices: GetAllCarsService
  ) { }

  ngOnInit() {
    this.carServices.getAllCars()
      .subscribe(success => console.log(success), err => console.log(err));
  }

}
