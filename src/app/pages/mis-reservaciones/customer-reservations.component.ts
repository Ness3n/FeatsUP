import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Reservation {
  restaurant: string;
  area: string;
  time: string;
  people: number;
  date: string;
}

@Component({
  selector: 'app-customer-reservations',
  standalone: false,
  templateUrl: './customer-reservations.component.html',
  styleUrls: ['./customer-reservations.component.css']
})
export class CustomerReservationsComponent implements OnInit {
  hasReservations: boolean = true; // Cambia a false para ver el estado vacío
  
  reservation: Reservation = {
    restaurant: 'aa ss',
    area: 'Salón Principal',
    time: '11:11',
    people: 7,
    date: 'Creado: 28 de noviembre de 2025'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  crearNuevaReservacion(): void {
    this.router.navigate(['/nueva-reservacion']);
  }
}
