import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  standalone: false,
  templateUrl: './bienvenido.html',
  styleUrl: './bienvenido.css',
})
export class Bienvenido {

  showModal = false;              // controla el modal
  successMessage: string | null = null;   // controla la notificación

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  showSuccess(message: string) {
    this.successMessage = message;

    setTimeout(() => {
      this.successMessage = null;   // se oculta en 3s
    }, 3000);
  }

  confirmDelete() {
    // Aquí puedes eliminar realmente en tu lógica o servicio
    this.showSuccess('Reservación de aa ss eliminada exitosamente');

    this.closeModal();
  }
}
