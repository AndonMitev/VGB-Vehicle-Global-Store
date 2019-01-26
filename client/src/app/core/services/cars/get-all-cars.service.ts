import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAllCarsService {
  constructor(private http: HttpClient) { }

  getAllCars() {
    return this.http.get('http://localhost:7000/car/all');
  }
}