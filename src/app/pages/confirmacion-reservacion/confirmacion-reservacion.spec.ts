import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionReservacion } from './confirmacion-reservacion';

describe('ConfirmacionReservacion', () => {
  let component: ConfirmacionReservacion;
  let fixture: ComponentFixture<ConfirmacionReservacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmacionReservacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacionReservacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
