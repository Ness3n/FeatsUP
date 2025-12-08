import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Asegúrate de que la ruta a auth.service sea correcta según tu estructura
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-inicia-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './inicia-sesion.component.html',
  styleUrls: ['./inicia-sesion.component.css']
})
export class LoginComponent {
  form: FormGroup;
  errorMensaje: string = ''; // Variable para mostrar errores en el HTML

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ingresar() {
    console.log('1. Intentando ingresar...');

    // 1. Validar formulario antes de enviar
    if (this.form.invalid) {
      console.log('2. Formulario Inválido. Errores:', this.form.errors);
      this.form.markAllAsTouched(); // Muestra los errores rojos en los inputs
      return;
    }

    const { correo, contrasena } = this.form.value;
    console.log('3. Formulario válido. Enviando credenciales al backend...', { correo });

    // 2. Llamar al servicio de Login
    this.authService.login(correo, contrasena).subscribe({
      next: (response) => {
        console.log('4. Login Exitoso. Respuesta del server:', response);
        
        // 3. Redirección forzada
        // Usamos la ruta EXACTA que tienes en app.routes.ts
        this.router.navigate(['/customer-reservations'])
          .then(success => {
            if (success) {
              console.log('5. Navegación exitosa a /customer-reservations');
            } else {
              console.error('5. ERROR: La navegación falló. Verifica app.routes.ts');
            }
          });
      },
      error: (err) => {
        console.error('ERROR DE LOGIN:', err);
        // Manejo de errores específicos del backend
        if (err.status === 401 || err.status === 404) {
          this.errorMensaje = 'Correo o contraseña incorrectos';
        } else if (err.status === 0) {
          this.errorMensaje = 'No hay conexión con el servidor (Backend apagado o IP incorrecta)';
        } else {
          this.errorMensaje = 'Ocurrió un error inesperado. Intenta de nuevo.';
        }
      }
    });
  }

  crearCuenta(): void {
    this.router.navigate(['/register']);
  }

  volverBienvenido(): void {
    this.router.navigate(['']);
  }
}