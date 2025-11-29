import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciaSesion } from './inicia-sesion';

describe('IniciaSesion', () => {
  let component: IniciaSesion;
  let fixture: ComponentFixture<IniciaSesion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IniciaSesion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciaSesion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
