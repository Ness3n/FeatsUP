import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Bienvenidocomponent } from './pages/bienvenido/Bienvenido.component';
import { RegisterComponent } from './pages/crear-cuenta/crear-cuenta.component';
import { CustomerReservationsComponent } from './pages/mis-reservaciones/customer-reservations.component';
import { NuevaReservacionComponent } from './pages/nueva-reservacion/nueva-reservacion';
import { ReservacionExitosaComponent } from './pages/confirmacion-reservacion/confirmacion-reservacion';
import { Gestionreservas } from './pages/gestionreservas/gestionreservas';
import { ReservationsComponent } from './pages/reservacion-cajero/reservations.component';
import { LoginComponent } from './pages/inicia-sesion/inicia-sesion.component';

@NgModule({
  declarations: [
    App,
    Bienvenidocomponent,
    NuevaReservacionComponent,
    ReservacionExitosaComponent,
    Gestionreservas,
    LoginComponent,
    CustomerReservationsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReservationsComponent,
    RegisterComponent
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
