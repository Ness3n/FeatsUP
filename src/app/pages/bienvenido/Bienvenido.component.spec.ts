import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bienvenidocomponent } from './Bienvenido.component';

describe('InicioComponent', () => {
  let component: Bienvenidocomponent;
  let fixture: ComponentFixture<Bienvenidocomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bienvenidocomponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(Bienvenidocomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render welcome message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.bienvenida')?.textContent).toContain('Bienvenido');
  });

  it('should have two main buttons', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('.botones .btn');
    expect(buttons.length).toBe(2);
  });
});