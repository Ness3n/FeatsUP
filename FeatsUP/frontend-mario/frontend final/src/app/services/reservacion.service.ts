import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Reservacion, AreaReservacion } from '../models/reservacion.model';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
  private reservacionActual = new BehaviorSubject<Reservacion | null>(null);

  private areas: AreaReservacion[] = [
    {
      id: 'principal',
      nombre: 'Salón Principal',
      descripcion: 'Mesa general en el salón',
      icono: '🍽️'
    },
    {
      id: 'ninos',
      nombre: 'Área de Niños',
      descripcion: 'Espacio familiar con juegos',
      icono: '🎈'
    },
    {
      id: 'privada',
      nombre: 'Área Privada',
      descripcion: 'Espacio exclusivo y privado',
      icono: '👑'
    }
  ];

  constructor() { }

  getAreas(): AreaReservacion[] {
    return this.areas;
  }

  setReservacion(reservacion: Reservacion): void {
    reservacion.fechaCreacion = new Date();
    this.reservacionActual.next(reservacion);
  }

  getReservacionActual(): Observable<Reservacion | null> {
    return this.reservacionActual.asObservable();
  }

  clearReservacion(): void {
    this.reservacionActual.next(null);
  }
}