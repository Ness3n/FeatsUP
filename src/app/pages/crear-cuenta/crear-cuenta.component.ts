import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service'; // [1] Importar
import { Usuario } from '../../models/reservacion.model';

@Component({
  selector: 'app-crear-cuenta',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // [2] Inyectar
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmarContrasena: ['', Validators.required],
      fecha: ['', Validators.required], // En el HTML es 'fecha', en backend es 'fechaNacimiento'
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

    // [3] Preparar el objeto Usuario tal como lo espera el Backend
    // Omitimos 'confirmarContrasena' y mapeamos 'fecha' a 'fechaNacimiento'
    const nuevoUsuario: Usuario = {
      nombre: this.form.get('nombre')?.value,
      apellidos: this.form.get('apellidos')?.value,
      correo: this.form.get('correo')?.value,
      contrasena: this.form.get('contrasena')?.value,
      fechaNacimiento: this.form.get('fecha')?.value,
      celular: this.form.get('celular')?.value,
      rol: 'usuario' // Valor por defecto
    };

    // [4] Llamar al servicio
    this.authService.registro(nuevoUsuario).subscribe({
      next: (res) => {
        console.log('Usuario registrado:', res);
        alert('Cuenta creada con éxito. Por favor inicia sesión.');
        this.router.navigate(['/inicia-sesion']);
      },
      error: (err) => {
        console.error('Error al registrar:', err);
        alert('Hubo un error al crear la cuenta. Intenta con otro correo.');
      }
    });
  }
}