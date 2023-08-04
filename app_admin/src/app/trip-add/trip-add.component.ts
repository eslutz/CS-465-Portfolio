import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-add',
  templateUrl: './trip-add.component.html',
  styleUrls: ['./trip-add.component.css'],
})
export class TripAddComponent implements OnInit {
  addTripFormGroup!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
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
    console.log('AddTripComponent#onSubmit calling TripDataService#addTrip()');

    this.submitted = true;
    if (this.addTripFormGroup.valid) {
      this.tripService.addTrip(this.addTripFormGroup.value).then((data) => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
  }

  // Get the form short name to access the form fields
  get f() {
    return this.addTripFormGroup.controls;
  }
}
