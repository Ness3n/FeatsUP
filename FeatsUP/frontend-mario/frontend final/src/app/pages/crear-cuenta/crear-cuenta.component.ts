import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-cuenta',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class RegisterComponent {
  form;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required],
      fecha: ['', Validators.required],
      celular: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    }, { validators: this.passwordsMatchValidator });
  }

  
  passwordsMatchValidator(control: AbstractControl): ValidationErrors | null {
    const pass = control.get('contrasena')?.value;
    const confirm = control.get('confirmarContrasena')?.value;
    return pass === confirm ? null : { passwordsMismatch: true };
  }

  crearCuenta() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Formulario válido:', this.form.value);
    this.router.navigate(['/customer-reservations']);
  }
}