import { Routes } from '@angular/router';
import {Bienvenidocomponent } from './Bienvenido/Bienvenido.component';

export const routes: Routes = [
  { path: '', component: Bienvenidocomponent },
  {
    path: '',
    loadComponent: () =>
      import('./Bienvenido/Bienvenido.component').then(m => m.Bienvenidocomponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./inicia-sesion/inicia-sesion.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./crear-cuenta/crear-cuenta.component').then(m => m.RegisterComponent)
  },
];