import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {Bienvenido} from './pages/bienvenido/bienvenido';
import { IniciaSesion } from './pages/inicia-sesion/inicia-sesion';
import { CrearCuenta } from './pages/crear-cuenta/crear-cuenta';
import { MisReservaciones } from './pages/mis-reservaciones/mis-reservaciones';
import { NuevaReservacion } from './pages/nueva-reservacion/nueva-reservacion';
import { ConfirmacionReservacion } from './pages/confirmacion-reservacion/confirmacion-reservacion';

@NgModule({
  declarations: [
    App,
    Bienvenido,
    IniciaSesion,
    CrearCuenta,
    MisReservaciones,
    NuevaReservacion,
    ConfirmacionReservacion,
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
