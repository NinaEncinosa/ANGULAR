import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from './plants-list/plant';

// const URL = 'https://5f87805549ccbb00161775ca.mockapi.io/api/v1/beers';

@Injectable({
  providedIn: 'root',
})
export class PlantDataService {
  constructor(private http: HttpClient) {}

  // public getAll(): Observable<Plant[]> {
  //   // fetch('url', {method: 'GET'})
  //   return this.http
  //     .get<Plant[]>(URL)
  //     .pipe(
  //       tap((plants: Plant[]) =>
  //         plants.forEach((plant) => (plant.quantity = 0))
  //       )
  //     );
  // }
}
