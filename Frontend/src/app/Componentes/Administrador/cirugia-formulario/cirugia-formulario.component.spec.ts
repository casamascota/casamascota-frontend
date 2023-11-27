import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirugiaFormularioComponent } from './cirugia-formulario.component';

describe('CirugiaFormularioComponent', () => {
  let component: CirugiaFormularioComponent;
  let fixture: ComponentFixture<CirugiaFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirugiaFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirugiaFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
