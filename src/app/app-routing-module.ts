import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bienvenidocomponent } from './pages/bienvenido/Bienvenido.component';
import { LoginComponent } from './pages/inicia-sesion/inicia-sesion.component';
import { CustomerReservationsComponent } from './pages/mis-reservaciones/customer-reservations.component';
import { NuevaReservacionComponent } from './pages/nueva-reservacion/nueva-reservacion';
import { ReservacionExitosaComponent } from './pages/confirmacion-reservacion/confirmacion-reservacion';

const routes: Routes = [
  { path: '', component: Bienvenidocomponent, pathMatch: 'full' },
  { path: 'inicia-sesion', component: LoginComponent },
  { path: 'register', loadComponent: () => import('./pages/crear-cuenta/crear-cuenta.component').then(m => m.RegisterComponent) },
  { path: 'customer-reservations', component: CustomerReservationsComponent },
  { path: 'nueva-reservacion', component: NuevaReservacionComponent },
  { path: 'reservacion-exitosa', component: ReservacionExitosaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
