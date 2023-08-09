import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
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
    console.log('Inside TripListComponent#editTrip');
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['edit-trip']);
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}
