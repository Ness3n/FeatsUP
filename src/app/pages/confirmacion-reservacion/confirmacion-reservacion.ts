import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmacion-reservacion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './confirmacion-reservacion.html',
  styleUrls: ['./confirmacion-reservacion.css'] // Asegúrate de que el nombre coincida
})
export class ConfirmacionReservacionComponent implements OnInit {
  // Definimos la estructura de datos que espera el HTML
  reservacion: any = null;

  constructor(private router: Router) {
    // Intentamos recuperar los datos pasados por la navegación
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.reservacion = navigation.extras.state['datos'];
    }
  }

  ngOnInit(): void {
    // Si alguien entra directo a esta url sin reservar, lo regresamos
    if (!this.reservacion) {
      this.router.navigate(['/customer-reservations']);
    }
  }

  // Función que pide el HTML
  obtenerNombreArea(): string {
    return this.reservacion?.areaNombre || 'Área General';
  }

  // Función que pide el HTML
  formatearFecha(): string {
    const fecha = new Date();
    return fecha.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  volverMisReservaciones(): void {
    this.router.navigate(['/customer-reservations']);
  }

  volverDashboard(): void {
    this.router.navigate(['/customer-reservations']);
  }
}
