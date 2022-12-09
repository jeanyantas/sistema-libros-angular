import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs'; // Importar

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  isAuthenticate: boolean = false;

  public var1 = localStorage.getItem('login');
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }

  loginA(): boolean{
    if(this.var1){
      this.isAuthenticate = false;
      this.loggedIn.next(true);
      return true;
    }else{
      return true; // ¿Debe ser false?
    }
  }
  
}
