import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaReservacionComponent } from './nueva-reservacion';

describe('NuevaReservacion', () => {
  let component: NuevaReservacionComponent;
  let fixture: ComponentFixture<NuevaReservacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevaReservacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaReservacionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
