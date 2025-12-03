
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReservacionService } from '../../services/reservacion.service';
import { AreaReservacion } from '../../models/reservacion.model';
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
  areas: AreaReservacion[] = [];

  constructor(
    private fb: FormBuilder,
    private reservacionService: ReservacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.areas = this.reservacionService.getAreas();
    
    this.reservacionForm = this.fb.group({
      nombreCliente: ['aa ss', [Validators.required]],
      horario: ['11:11', [Validators.required]],
      numeroPersonas: [17, [Validators.required, Validators.min(1)]]
    });
  }

  seleccionarArea(areaId: string): void {
    this.areaSeleccionada = areaId;
  }

  obtenerNombreArea(): string {
    const area = this.areas.find(a => a.id === this.areaSeleccionada);
    return area ? area.nombre : 'Salón Principal';
  }

  mostrarResumen(): boolean {
    return this.reservacionForm.get('nombreCliente')?.value !== '' ||
           this.reservacionForm.get('horario')?.value !== '' ||
           this.reservacionForm.get('numeroPersonas')?.value !== null;
  }

  confirmarReservacion(): void {
    if (this.reservacionForm.valid) {
      const reservacion = {
        nombreCliente: this.reservacionForm.get('nombreCliente')?.value,
        area: this.areaSeleccionada as 'principal' | 'ninos' | 'privada',
        horario: this.reservacionForm.get('horario')?.value,
        numeroPersonas: this.reservacionForm.get('numeroPersonas')?.value
      };

      this.reservacionService.setReservacion(reservacion);
      this.router.navigate(['/reservacion-exitosa']);
    }
  }

  volverDashboard(): void {
    this.router.navigate(['/customer-reservations']);
  }

  volverMisReservaciones(): void {
    this.router.navigate(['/customer-reservations']);
  }
}
