import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Delete } from './delete/delete';
import { Bienvenido } from './bienvenido/bienvenido';
import { IniciaSesion } from './pages/inicia-sesion/inicia-sesion';
import { CrearCuenta } from './pages/crear-cuenta/crear-cuenta';
import { MisReservaciones } from './pages/mis-reservaciones/mis-reservaciones';
import { NuevaReservacion } from './pages/nueva-reservacion/nueva-reservacion';
import { ConfirmacionReservacion } from './pages/confirmacion-reservacion/confirmacion-reservacion';
import { Gestionreservas } from './pages/gestionreservas/gestionreservas';

@NgModule({
  declarations: [
    App,
    Delete,
    Bienvenido,
    IniciaSesion,
    CrearCuenta,
    MisReservaciones,
    NuevaReservacion,
    ConfirmacionReservacion,
    Gestionreservas
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
