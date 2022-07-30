import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroInicioComponent } from './libro-inicio.component';

describe('LibroInicioComponent', () => {
  let component: LibroInicioComponent;
  let fixture: ComponentFixture<LibroInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibroInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
