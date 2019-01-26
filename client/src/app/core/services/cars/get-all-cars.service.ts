import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AllCarsModel } from '../../models/car/get-all-cars.model';

@Injectable({
  providedIn: 'root'
})
export class GetAllCarsService {
  constructor(private http: HttpClient) { }

  public getAllCars(): Observable<AllCarsModel[]> {
    return this.http.get<AllCarsModel[]>('http://localhost:7000/car/all');
  }
}