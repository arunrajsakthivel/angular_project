import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public Menu:string[]=["Places","Flight","Pacakage","Travels","Hotel"];
  public Places:any[]=[{"Name":"Tamilnadu", "No. of places":16},
  {"Name":"Kerala", "No. of places":15},
  {"Name":"Bangalore", "No. of places":13}
]
}
