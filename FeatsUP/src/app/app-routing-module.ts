import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bienvenido } from './pages/bienvenido/bienvenido';

const routes: Routes = [
  { 
    path:'', component: Bienvenido}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
// src/app/pruebas/pruebas-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Gestionreservas } from '../pruebas/gestionreservas/gestionreservas';

const routes: Routes = [
  { path: '', component: Gestionreservas }   // <- usar la clase correcta
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebasRoutingModule { }

*/