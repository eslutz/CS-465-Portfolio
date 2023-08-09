import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  @Input('trip') trip!: Trip;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void { }

  editTrip(trip: Trip): void {
    console.log('TripCardComponent#editTrip setting tripCode in localStorage', trip.code);
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    console.log('TripCardComponent#editTrip routing to TripEditComponent');
    this.router.navigate(['edit-trip']);
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}
