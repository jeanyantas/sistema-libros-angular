import { Injectable } from '@angular/core';

// IMPORTAR
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Interceptor1Service {

  // Modificar constructor con el parámetro http
  constructor(private http: HttpClient) { }

  // Agregar el método INTERCEPT
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Paso por el interceptor 1');
    return next.handle(req);
  }

  capturarJSON(): any {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }
}
