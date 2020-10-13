import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {ICars} from '../Interfaces/ICars';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  private url = 'https://localhost:5001/api';
  constructor(private http: HttpClient) { }

  addCarInInventory(carDetails: any) {
    return this.http.post(`${this.url}/CarDetails`, carDetails);
   }
   getCars(): Observable<Array<ICars>> {
    return this.http.get<Array<ICars>>(`${this.url}/CarDetails`);
  }
}
