import { Component } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent {
  title: string = 'Popular Places';
  places: string[] = ['Paris', 'New York', 'Tokyo', 'London'];

}
