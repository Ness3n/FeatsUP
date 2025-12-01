// Interfaces principales
export interface Usuario {
  nombre: string;
  email: string;
  codigoINE: string;
}

export interface Cliente extends Usuario {
  id_cliente: string;
  ocuparMesa(idMesa: string): boolean;
  verificarMesasVacias(): Mesa[];
}

export interface Cajera extends Usuario {
  id_cajera: string;
  registrarClientes(cliente: Cliente): boolean;
  validarReservacion(reservacion: Reservacion): boolean;
}

export interface Mesa {
  id_Mesa: string;
  numeroMesa: number;
  numeroSillas: number;
  estado: 'DISPONIBLE' | 'OCUPADA' | 'RESERVADA';
  mostrarMesa(): void;
}

export interface Reservacion {
  id_reservacion: string;
  hora: Date;
  id_mesa: string;
  nombre_cliente: string;
  estado: 'ACTIVA' | 'CANCELADA' | 'COMPLETADA';
  
  cancelarReservacion(): boolean;
  modificarReservacion(nuevaHora: Date, nuevaMesa?: string): boolean;
  mostrarReservacion(): void;
}

export interface Factura {
  id_factura: string;
  precioTotal: number;
  reserva: Reservacion;
  mesa: Mesa;
  
  calcularPrecio(): number;
  mostrarFactura(): void;
}