import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trip } from '../models/trip';

@Injectable()
export class TripDataService {
  constructor(private httpClient: HttpClient) {}

  private apiBaseUrl = 'http://localhost:3000/api';

  public getTrips(): Promise<Trip[]> {
    console.log("Inside TripDataService#getTrips");
    return this.httpClient
      .get<Trip[]>(`${this.apiBaseUrl}/trips`)
      .toPromise()
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip[]> {
    console.log(`Inside TripDataService#getTrip(${tripCode})`);
    return this.httpClient
      .get<Trip[]>(`${this.apiBaseUrl}/trips/${tripCode}`)
      .toPromise()
      .catch(this.handleError);
  }

  public addTrip(formData: Trip): Promise<Trip> {
    console.log("Inside TripDataService#addTrip");
    return this.httpClient
      .post<Trip[]>(`${this.apiBaseUrl}/trips`, formData)
      .toPromise()
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip[]> {
    console.log("Inside TripDataService#updateTrip");
    console.log(formData);
    return this.httpClient
      .put<Trip[]>(`${this.apiBaseUrl}/trips/${formData.code}`, formData)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
