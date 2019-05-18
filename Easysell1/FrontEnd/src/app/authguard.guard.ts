import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private myRoute:Router,private authservice:AuthService)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.authservice.isAuthenticated){
           return true;
      }else{
        this.myRoute.navigate(["login"]);
        return false;
      }
  }
}