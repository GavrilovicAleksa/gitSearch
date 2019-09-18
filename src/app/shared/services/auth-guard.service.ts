
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth: AuthService) { 
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.auth.isAuth();
  }
}
