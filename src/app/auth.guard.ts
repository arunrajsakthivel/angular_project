import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate,CanMatch, RouterStateSnapshot, UrlTree,Router,CanActivateChild, Route, UrlSegment} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild,CanMatch {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(localStorage.getItem("IsAuthorized"))
      {
        return true;
      }
      else
      {
       return this.router.parseUrl('/login');
      }
    }
    
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(localStorage.getItem("IsAuthorized"))
      {
        return true;
      }
      else
      {
       return this.router.parseUrl('/login');
      }
    }
  
    canMatch(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      if(localStorage.getItem("IsAdmin"))
      {
        return true;
      }
      else
      {
        return this.router.navigateByUrl('404',{skipLocationChange:true});
      }
    }
}
