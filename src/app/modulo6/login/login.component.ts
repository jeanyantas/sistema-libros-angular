import { Component, OnInit } from '@angular/core';

// Importar
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  resultado!: string;
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
      
  }

  login(username: string, password: string, alerta: HTMLDivElement){
    if(username == 'JP' && password == '123' && this.loginForm.valid){
      // alerta.classList.remove('visually-hidden');
      // this.resultado = 'Usuario y Contraseña son Correctos';
      window.localStorage.setItem('login', JSON.stringify(true));
      this.router.navigate(['/navbar']); // Aquí se configura que ruta carga cuando el login es correcto.
    }else{
      alerta.classList.remove('visually-hidden');
      this.resultado = 'Usuario y Contraseña son Incorrectos';
      window.localStorage.setItem('login', JSON.stringify(false));
    }
  }
  
}
