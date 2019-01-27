import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { carProps } from '../../../../utils/car-props';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {
  public createCarForm: FormGroup;
  public carProps;
  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.initializeCarForm();
    this.carProps = carProps;

  }

  public initializeCarForm(): void {
    this.createCarForm = this.fb.group({
      brand: [''],
      model: [''],
      modification: [''],
      horsePower: [0],
      price: [0],
      yearOfManufacture: [0],
      mileage: [0],
      color: [''],
      country: [''],
      region: [''],
      city: [''],
      engine: [''],
      condition: [''],
      euroStandart: [''],
      transmission: [''],
      category: [''],
      currency: [''],
      monthOfManufacture: [''],
      safety: [[]],
      comfort: [[]],
      others: [''],
      exterior: [''],
      protection: [''],
      interior: [''],
      specialized: ['']

    });
  }

  public submitCarForm(): void {
    console.log(this.createCarForm.value);
  }

  public get modification(): AbstractControl {
    return this.createCarForm.get('modification');
  }
}
