import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent {
  editTripFormGroup!: FormGroup;
  submitted = false;
  private tripCode: string |null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) {}

  ngOnInit() {
    // retrieve stashed tripId
    this.tripCode = localStorage.getItem("tripCode");
    if (!this.tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate([""]);
      return;
    }
    console.log("EditTripComponent#onInit found tripCode " + this.tripCode);

    // initialize form
    this.editTripFormGroup = this.formBuilder.group({
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

    console.log(`EditTripComponent#onInit calling TripDataService#getTrip('${this.tripCode}')`);

    // Retrieve the most recent trip data from the database
    this.tripService.getTrip(this.tripCode).then((data) => {
      console.log(data);
      // Don't use editTripFormGroup.setValue() as it will throw console error
      this.editTripFormGroup.patchValue(data[0]);
    });
  }

  onSubmit() {
    console.log(`EditTripComponent#onSubmit calling TripDataService#updateTrip('${this.tripCode}')`);

    this.submitted = true;
    if (this.editTripFormGroup.valid) {
      this.tripService.updateTrip(this.editTripFormGroup.value).then((data) => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
  }

  deleteTrip() {
    console.log(`EditTripComponent#deleteTrip calling TripDataService#deleteTrip('${this.tripCode}')`);

    if (this.tripCode != null) {
      this.tripService.deleteTrip(this.tripCode).then((data) => {
        console.log(data);
        this.router.navigate(['']);
      });
    } else {
      console.log("EditTripComponent#deleteTrip failed, tripCode is null");
      this.router.navigate(['']);
    }
  }

  // Get the form short name to access the form fields
  get f() {
    return this.editTripFormGroup.controls;
  }
}
