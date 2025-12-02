import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicia-sesion',
  standalone: false,
  templateUrl: './inicia-sesion.component.html',
  styleUrls: ['./inicia-sesion.component.css']
})
export class LoginComponent {
  form;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ingresar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Formulario válido:', this.form.value);
    this.router.navigate(['/customer-reservations']);
  }

  crearCuenta(): void {
    this.router.navigate(['/register']);
  }

  volverBienvenido(): void {
    this.router.navigate(['']);
  }
}