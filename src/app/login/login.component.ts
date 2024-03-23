import { Component } from '@angular/core';
import { Router} from '@angular/router'
import{FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public UserName:string;
  public Password:string;

  public constructor(private router:Router)
  {
    this.UserName="Karthik";
    this.Password='';
  }

  Login():void
  {
    if(this.UserName.toLowerCase()=="admin" && this.Password=="Admin123")
    {
        this.router.navigate(['/dashboard/places']);
        localStorage.setItem("IsAuthorized","true");
        localStorage.setItem('IsAdmin',"true");
    }
    else if(this.UserName.toLowerCase()=="karthik" && this.Password=="Karthik123")
    {
      this.router.navigate(['/dashboard/places']);
      localStorage.setItem("IsAuthorized","true");
    }
  }

}
