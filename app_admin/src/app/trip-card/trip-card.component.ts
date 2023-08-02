import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../models/trip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  @Input('trip') trip!: Trip;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  editTrip(trip: Trip): void {
    console.log('TripCardComponent#editTrip setting tripCode in localStorage', trip.code);
    localStorage.removeItem('tripCode');
    localStorage.setItem('tripCode', trip.code);
    console.log('TripCardComponent#editTrip routing to TripEditComponent');
    this.router.navigate(['edit-trip']);
  }
}
