import { Component, OnInit } from '@angular/core';
import { TripDataService } from '../services/trip-data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip-add',
  templateUrl: './trip-add.component.html',
  styleUrls: ['./trip-add.component.css'],
})
export class TripAddComponent implements OnInit {
  addTripFormGroup!: FormGroup;
  submitted = false;

  constructor(
    private tripService: TripDataService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.addTripFormGroup = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('TripAddComponent#onSubmit calling TripDataService#Trip');
    this.submitted = true;
    if (this.addTripFormGroup.valid) {
      this.tripService.addTrip(this.addTripFormGroup.value).then((data) => {
        console.log('TripAddComponent#onSubmit data', data);
        this.router.navigate(['']);
      });
    }
  }

  // Get the form short name to access the form fields
  get f() {
    return this.addTripFormGroup.controls;
  }
}
