export interface Reservacion {
  id?: number;            // En Kotlin es Int?
  usuarioId: number;      // En Kotlin es Int
  mesaId: number;         // En Kotlin es Int
  fechaReservacion: string; // String
  horaReservacion: string;  // String
  estado?: string;        // String (default "ACTIVA")
}

export interface Usuario {
  id?: number;
  nombre: string;
  apellidos?: string;
  correo: string;
  contrasena: string;
  fechaNacimiento?: string;
  celular?: string;
  rol?: string;
}

// Para la respuesta del login
export interface LoginResponse {
  token: string;
  rol: string;
  id: number; // Agregamos esto gracias al cambio en el backend
}