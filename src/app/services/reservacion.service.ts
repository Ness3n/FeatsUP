import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservacion } from '../models/reservacion.model';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {
  private apiUrl = `${environment.apiUrl}/reservaciones`;

  constructor(private http: HttpClient, private authService: AuthService) { }

  // Crear reservación (POST /reservaciones)
  crearReservacion(reservacion: Reservacion): Observable<Reservacion> {
    return this.http.post<Reservacion>(this.apiUrl, reservacion, this.getHeaders());
  }

  // Obtener mis reservaciones (GET /reservaciones/usuario/{uid})
  getMisReservaciones(): Observable<Reservacion[]> {
    const userId = this.authService.getUserId();
    if (!userId) {
        // Manejar caso de no logueado
        throw new Error('Usuario no autenticado');
    }
    return this.http.get<Reservacion[]>(`${this.apiUrl}/usuario/${userId}`, this.getHeaders());
  }

  // Obtener todas (GET /reservaciones) - Para admins/cajeros
  getAllReservaciones(): Observable<Reservacion[]> {
    return this.http.get<Reservacion[]>(this.apiUrl, this.getHeaders());
  }

  // Eliminar (DELETE /reservaciones/{id})
  eliminarReservacion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getHeaders()); // Ktor devuelve texto, quizás necesites { responseType: 'text' as 'json' } si falla el parseo
  }

  private getHeaders() {
    const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      })
    };
  }
}