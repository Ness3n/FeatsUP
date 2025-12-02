<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservacionService } from '../../services/reservacion.service';
import { Reservacion, AreaReservacion } from '../../models/reservacion.model';

@Component({
  selector: 'app-reservacion-exitosa',
  templateUrl: './confirmacion-reservacion.html',
  styleUrls: ['./confirmacion-reservacion.css'],
  standalone: false
})
export class ReservacionExitosaComponent implements OnInit {
  reservacion: Reservacion | null = null;
  areas: AreaReservacion[] = [];

  constructor(
    private reservacionService: ReservacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.areas = this.reservacionService.getAreas();
    
    this.reservacionService.getReservacionActual().subscribe(
      reservacion => {
        if (reservacion) {
          this.reservacion = reservacion;
        } else {
          // Si no hay reservación, redirigir a nueva reservación
          this.router.navigate(['/nueva-reservacion']);
        }
      }
    );
  }

  obtenerNombreArea(): string {
    if (!this.reservacion) return '';
    
    const area = this.areas.find(a => a.id === this.reservacion!.area);
    return area ? area.nombre : 'Salón Principal';
  }

  formatearFecha(): string {
    if (!this.reservacion?.fechaCreacion) return '';
    
    const fecha = new Date(this.reservacion.fechaCreacion);
    const dia = fecha.getDate().toString().padStart(2, '0');
    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 
                   'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const mes = meses[fecha.getMonth()];
    const año = fecha.getFullYear();
    const hora = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    
    return `${dia} de ${mes} de ${año}, ${hora}:${minutos}`;
  }

  volverMisReservaciones(): void {
    this.reservacionService.clearReservacion();
    this.router.navigate(['/mis-reservaciones']);
  }

  volverDashboard(): void {
    this.reservacionService.clearReservacion();
    this.router.navigate(['/nueva-reservacion']);
  }
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmacion-reservacion',
  standalone: false,
  templateUrl: './confirmacion-reservacion.html',
  styleUrl: './confirmacion-reservacion.css',
})
export class ConfirmacionReservacion {

>>>>>>> Mario
}
