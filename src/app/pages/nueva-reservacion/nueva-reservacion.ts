import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReservacionService } from '../../services/reservacion.service';
import { AuthService } from '../../services/auth.service'; // [1] Importar
import { Reservacion } from '../../models/reservacion.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nueva-reservacion',
  templateUrl: './nueva-reservacion.html',
  styleUrls: ['./nueva-reservacion.css'],
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule]
})
export class NuevaReservacionComponent implements OnInit {
  reservacionForm!: FormGroup;
  areaSeleccionada: string = 'principal';
  

  constructor(
    private fb: FormBuilder,
    private reservacionService: ReservacionService,
    private authService: AuthService, // [2] Inyectar para obtener el ID
    private router: Router
  ) {}

  ngOnInit(): void {
    
    
    this.reservacionForm = this.fb.group({
      // Nota: El 'nombreCliente' es solo visual en el form, el backend usa el usuarioId
      nombreCliente: ['Usuario', [Validators.required]], 
      horario: ['', [Validators.required]],
      numeroPersonas: [1, [Validators.required, Validators.min(1)]]
    });
  }

  seleccionarArea(areaId: string): void {
    this.areaSeleccionada = areaId;
  }


  mostrarResumen(): boolean {
    return this.reservacionForm.get('nombreCliente')?.value !== '' &&
           this.reservacionForm.get('horario')?.value !== '' &&
           this.reservacionForm.get('numeroPersonas')?.value !== null;
  }

  confirmarReservacion(): void {
    if (this.reservacionForm.valid) {
      
      // [3] Obtener ID del usuario logueado
      const userId = this.authService.getUserId();
      if (!userId) {
        alert('Tu sesión ha expirado o no has iniciado sesión.');
        this.router.navigate(['/inicia-sesion']);
        return;
      }

      // [4] Mapear Área (texto) a MesaId (número) para el Backend
      let mesaIdBackend = 1; 
      switch(this.areaSeleccionada) {
        case 'principal': mesaIdBackend = 1; break;
        case 'ninos': mesaIdBackend = 2; break;
        case 'privada': mesaIdBackend = 3; break;
        default: mesaIdBackend = 1;
      }

      // [5] Construir objeto Reservacion exacto
      const nuevaReservacion: Reservacion = {
        usuarioId: userId,
        mesaId: mesaIdBackend,
        // Formato ISO Fecha YYYY-MM-DD
        fechaReservacion: new Date().toISOString().split('T')[0], 
        horaReservacion: this.reservacionForm.get('horario')?.value,
        estado: 'ACTIVA'
        // 'numeroPersonas' no se envía si el backend no lo tiene en la tabla Reservacion
        // Si tu backend lo necesita, asegúrate de agregarlo al modelo en Kotlin y Angular.
      };

      // [6] Enviar al backend
     this.reservacionService.crearReservacion(nuevaReservacion).subscribe({
  next: (res) => {
    console.log('Reservación creada:', res);

    // PREPARAMOS LOS DATOS PARA LA PANTALLA DE ÉXITO
    const datosParaMostrar = {
      nombreCliente: this.reservacionForm.get('nombreCliente')?.value,
       // Usamos tu función existente para obtener el nombre
      horario: this.reservacionForm.get('horario')?.value,
      numeroPersonas: this.reservacionForm.get('numeroPersonas')?.value
    };

    // AQUI ESTA EL CAMBIO: Pasamos el objeto 'state'
    this.router.navigate(['/confirmacion-reservacion'], { state: { datos: datosParaMostrar } });
  },
        error: (err) => {
          console.error('Error al crear reservación:', err);
          alert('Error al procesar la reservación. Intenta de nuevo.');
        }
      });
    } else {
      this.reservacionForm.markAllAsTouched();
    }
  }

  volverDashboard(): void {
    this.router.navigate(['/customer-reservations']);
  }
}