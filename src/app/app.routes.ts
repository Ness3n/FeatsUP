import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/bienvenido/Bienvenido.component').then(m => m.Bienvenidocomponent)
  },
  {
    path: 'inicia-sesion',
    loadComponent: () =>
      import('./pages/inicia-sesion/inicia-sesion.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/crear-cuenta/crear-cuenta.component').then(m => m.RegisterComponent)
  },
  {
    path: 'customer-reservations',
    loadComponent: () =>
      import('./pages/mis-reservaciones/customer-reservations.component').then(m => m.CustomerReservationsComponent)
  },
  {
    path: 'nueva-reservacion',
    loadComponent: () =>
      import('./pages/nueva-reservacion/nueva-reservacion').then(m => m.NuevaReservacionComponent)
  },
  {
    path: 'reservacion-exitosa',
    loadComponent: () =>
      import('./pages/confirmacion-reservacion/confirmacion-reservacion').then(m => m.ReservacionExitosaComponent)
  }
  ,
  {
    path: 'gestion-reserva',
    loadComponent: () =>
      import('./pages/gestionreservas/gestionreservas').then(m => m.GestionreservasComponent)
  }
];