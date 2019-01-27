import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {
  public createCarForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
  }

  public initializeCarForm(): void {
    this.createCarForm = this.fb.group({

    });
  }

}
