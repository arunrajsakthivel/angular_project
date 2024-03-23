import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlacesComponent } from './places/places.component';
import { FlightComponent } from './flight/flight.component';
import { PackageComponent } from './package/package.component';
import { TravelsComponent } from './travels/travels.component';
import { LoginComponent } from './login/login.component';
import { HotelComponent } from './hotel/hotel.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],
  
    children:
    [
      {path:'',redirectTo:'dashboard',pathMatch:'full'},
      {path:'places',component:PlacesComponent},
      {path:'flight',component:FlightComponent,canMatch:[AuthGuard]},
      {path:'package',component:PackageComponent},
      {path:'travels',component:TravelsComponent},
      {path:'hotel',component:HotelComponent}
    ]},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login', pathMatch:'full'},
  { path: 'Products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
