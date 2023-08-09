import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripAddComponent } from './trip-add/trip-add.component';
import { TripDataService } from './services/trip-data.service';
import { TripEditComponent } from './trip-edit/trip-edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    TripAddComponent,
    TripEditComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    TripDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }