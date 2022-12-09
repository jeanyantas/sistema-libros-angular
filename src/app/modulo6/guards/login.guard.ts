import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthLoginService } from '../services/auth-login.service'; // Importar el servicio auth-login

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authlogin: AuthLoginService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const log = localStorage.getItem('login');
      if(log){
        if(JSON.parse(log)){
          return true;
        }else{
          this.router.navigate(['/login'], {queryParams: { returnUrl: state.url } });
          return false;
        }
      }
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
  }
  
}
