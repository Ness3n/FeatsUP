
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReservacionService } from '../../services/reservacion.service';
import { Reservacion, AreaReservacion } from '../../models/reservacion.model';

@Component({
  selector: 'app-reservacion-exitosa',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './confirmacion-reservacion.html',
  styleUrls: ['./confirmacion-reservacion.css'],
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
    this.router.navigate(['/customer-reservations']);
  }

  volverDashboard(): void {
    this.reservacionService.clearReservacion();
    this.router.navigate(['/nueva-reservacion']);
  }
}
