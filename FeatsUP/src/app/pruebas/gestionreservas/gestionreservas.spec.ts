import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gestionreservas } from './gestionreservas';

describe('Gestionreservas', () => {
  let component: Gestionreservas;
  let fixture: ComponentFixture<Gestionreservas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Gestionreservas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gestionreservas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
