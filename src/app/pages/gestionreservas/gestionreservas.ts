import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Reservacion {
  id: number;
  nombreCliente: string;
  area: string;
  hora: string;
  cantidadPersonas: number;
}

@Component({
  selector: 'app-gestionreservas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestionreservas.html',
  styleUrls: ['./gestionreservas.css'],
})
export class GestionreservasComponent implements OnInit {
  reservaciones: Reservacion[] = [
    { id: 1, nombreCliente: 'Mario', area: 'Salón Principal', hora: '11:11', cantidadPersonas: 4 },
    { id: 2, nombreCliente: 'Mario', area: 'Área Niños', hora: '13:30', cantidadPersonas: 6 }
  ];

  reservacionSeleccionada: Reservacion | null = null;

  ngOnInit(): void {}
    
  constructor(
    private router: Router
  ) {}

  confirmarEliminacion(reservacion: Reservacion): void {
    this.reservacionSeleccionada = reservacion;
  }

  cancelar(): void {
    this.reservacionSeleccionada = null;
  }

  eliminar(): void {
    if (this.reservacionSeleccionada) {
      this.reservaciones = this.reservaciones.filter(r => r.id !== this.reservacionSeleccionada!.id);
      this.reservacionSeleccionada = null;
    }
  }
    volverMisReservaciones(): void {
    this.router.navigate(['/customer-reservations']);
  }
}

