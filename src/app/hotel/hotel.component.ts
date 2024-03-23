import { Component } from '@angular/core';
import { HotelInfo } from './hotel-info';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent {
  public Hotel:HotelInfo;
  public HotelCollection:HotelInfo[];

constructor(){
  this.Hotel= new HotelInfo();
  this.HotelCollection=[];
} 
onsubmit(){
  alert(this.Hotel.HotelName);
  alert(this.Hotel.RoomType);
  alert(this.Hotel.Address);
  alert(this.Hotel.Email);
}

}
