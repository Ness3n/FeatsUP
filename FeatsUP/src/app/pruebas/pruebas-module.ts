// src/app/pruebas/pruebas.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebasRoutingModule } from './pruebas-routing-module.js';
import { Gestionreservas } from './gestionreservas/gestionreservas';

@NgModule({
  declarations: [
  
    Gestionreservas
  ],
  imports: [
    CommonModule,
    PruebasRoutingModule
  ]
})
export class PruebasModule { }
