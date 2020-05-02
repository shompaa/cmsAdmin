import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(public _authService: AuthService, public router: Router) {}

  canActivate() {
    if (this._authService.isLogged()) {
      console.log('Wardiola');
      return true;
    } else {
      console.log('Bloqueado por wardiola');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
