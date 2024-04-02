import { Component } from '@angular/core';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent {
  from: string ="";
  destination: string ="";
  date: string ="";
  duration: number =1;

  bookTravels(): void {
    // Add logic to handle booking travels
    alert('Booking travels from ' + this.from + ' to ' + this.destination + ' for ' + this.duration + ' days.');
  }
}
