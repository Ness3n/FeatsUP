import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginResponse, Usuario } from '../models/reservacion.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Registrarse usa la ruta de usuarios (UserRoutes.kt)
  registro(usuario: Usuario): Observable<Usuario> {
    // Tu backend espera POST /usuarios para crear
    return this.http.post<Usuario>(`${this.apiUrl}/usuarios`, usuario);
  }

  // Login usa la ruta de auth (AuthRoutes.kt)
  login(correo: string, contrasena: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { correo, contrasena }).pipe(
      tap(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('userId', res.id.toString()); // Guardamos el ID para usarlo luego
          localStorage.setItem('userRole', res.rol);
        }
      })
    );
  }

  logout() {
    localStorage.clear();
  }

  getUserId(): number | null {
    const id = localStorage.getItem('userId');
    return id ? parseInt(id) : null;
  }
}