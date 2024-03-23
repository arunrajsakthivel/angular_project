import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlacesComponent } from './places/places.component';
import { FlightComponent } from './flight/flight.component';
import { PackageComponent } from './package/package.component';
import { TravelsComponent } from './travels/travels.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HotelComponent } from './hotel/hotel.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlacesComponent,
    FlightComponent,
    PackageComponent,
    TravelsComponent,
    FooterComponent,
    LoginComponent,
    HotelComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
