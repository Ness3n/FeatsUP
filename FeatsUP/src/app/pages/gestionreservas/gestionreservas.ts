import { Component } from '@angular/core';

interface Reservacion {
  id: number;
  nombreCliente: string;
  area: string;
  hora: string;
  cantidadPersonas: number;
}

@Component({
  selector: 'app-cliente-reservaciones',
  templateUrl: './cliente-reservaciones.component.html',
  styleUrls: ['./cliente-reservaciones.component.css']
})
export class ClienteReservacionesComponent {
  reservaciones: Reservacion[] = [
    { id: 1, nombreCliente: 'Mario', area: 'Salón Principal', hora: '11:11', cantidadPersonas: 4 },
    { id: 2, nombreCliente: 'Mario', area: 'Área Niños', hora: '13:30', cantidadPersonas: 6 }
  ];

  reservacionSeleccionada: Reservacion | null = null;

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
}