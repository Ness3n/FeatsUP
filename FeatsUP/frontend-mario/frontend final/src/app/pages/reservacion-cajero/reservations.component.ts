import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Reservation {
  name: string;
  area: string;
  time: string;
  people: number;
  date: string;
  colorClass: string;
}

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class ReservationsComponent implements OnInit {
  searchTerm: string = '';
  
  reservations: Reservation[] = [
    {
      name: 'María García López',
      area: 'Salón Principal',
      time: '14:00',
      people: 4,
      date: 'Creado: 7 de diciembre de 2025',
      colorClass: 'cyan'
    },
    {
      name: 'Carlos Rodríguez Pérez',
      area: 'Área de Niños',
      time: '12:30',
      people: 6,
      date: 'Creado: 3 de diciembre de 2025',
      colorClass: 'pink'
    },
    {
      name: 'Ana Martínez Silva',
      area: 'Área Privada',
      time: '20:00',
      people: 8,
      date: 'Creado: 2 de diciembre de 2025',
      colorClass: 'purple'
    },
    {
      name: 'Juan González Torres',
      area: 'Salón Principal',
      time: '18:30',
      people: 2,
      date: 'Creado: 3 de diciembre de 2025',
      colorClass: 'cyan'
    },
    {
      name: 'Laura Fernández Ruiz',
      area: 'Área de Niños',
      time: '13:00',
      people: 3,
      date: 'Creado: 2 de diciembre de 2025',
      colorClass: 'pink'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}