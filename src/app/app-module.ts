import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Bienvenido } from './pages/bienvenido/bienvenido';
import { IniciaSesion } from './pages/inicia-sesion/inicia-sesion';
import { CrearCuenta } from './pages/crear-cuenta/crear-cuenta';
import { MisReservaciones } from './pages/mis-reservaciones/mis-reservaciones';
import { NuevaReservacionComponent } from './pages/nueva-reservacion/nueva-reservacion';
import { ReservacionExitosaComponent } from './pages/confirmacion-reservacion/confirmacion-reservacion';
import { Gestionreservas } from './pages/gestionreservas/gestionreservas';
import { ReservationsComponent } from './pages/reservacion-cajero/reservations.component';

@NgModule({
  declarations: [
    App,
    Bienvenido,
    IniciaSesion,
    CrearCuenta,
    MisReservaciones,
    NuevaReservacionComponent,
    ReservacionExitosaComponent,
    Gestionreservas,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    ,
    ReservationsComponent
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
