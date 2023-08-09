import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';
import { AuthenticationService } from '../services/authentication.service';
import { Trip } from '../models/trip'

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];
  message: string = '';

  constructor(
    private tripDataService: TripDataService,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTrips();
  }

  private getTrips(): void {
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for trips';
    this.tripDataService
      .getTrips()
      .then(foundTrips => {
        this.message = foundTrips.length > 0 ? '' : 'No trips found';
        this.trips = foundTrips;
      });
  }

  public addTrip(): void {
    console.log('Inside TripListingComponent#addTrip');
    this.router.navigate(['/add-trip']);
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}
