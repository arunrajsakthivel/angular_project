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
  alert(
  "Entered your Name is: "+this.Hotel.HotelName+"\n"+
  "No of your Booking rooms are: "+this.Hotel.Rooms+"\n"+
  "Selected room Type is: "+this.Hotel.RoomType+"\n"+
  "Entered your Address is: "+this.Hotel.Address+"\n"+
  "Entered your email id: "+this.Hotel.Email
  );
 
  alert("Thank you for booking. We received your booking, Once your booking is confirmed we will notify you as soon.");
}

}
