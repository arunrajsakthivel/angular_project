import { Component } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent {
  title: string = 'Search Flights';
  from: string = '';
  to: string = '';
  departureDate: string = '';
  returnDate: string = '';

  searchFlights(): void {
    // Display alert with booked details
    alert(`You are trying to book a flight from ${this.from} to ${this.to} on ${this.departureDate} and return on ${this.returnDate}.`);

    // Redirect to another flight booking site
    const confirmRedirect = confirm('You are now leaving our site to book your flight. Proceed?');
    if (confirmRedirect) {
      window.open('https://www.ixigo.com', '_blank');
    }
  }
}
