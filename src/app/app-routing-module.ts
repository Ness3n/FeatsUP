import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaReservacionComponent } from './pages/nueva-reservacion/nueva-reservacion';
import { ReservacionExitosaComponent } from './pages/confirmacion-reservacion/confirmacion-reservacion';

const routes: Routes = [
  { path: '', redirectTo: '/nueva-reservacion', pathMatch: 'full' },
  { path: 'nueva-reservacion', component: NuevaReservacionComponent },
  { path: 'reservacion-exitosa', component: ReservacionExitosaComponent },
  { path: '**', redirectTo: '/nueva-reservacion' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
