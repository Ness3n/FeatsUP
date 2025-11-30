export interface Reservacion {
  nombreCliente: string;
  area: 'principal' | 'ninos' | 'privada';
  horario: string;
  numeroPersonas: number;
  fechaCreacion?: Date;
}

export interface AreaReservacion {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
}