import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirugiaFormularioDoctorComponent } from './cirugia-formulario-doctor.component';

describe('CirugiaFormularioDoctorComponent', () => {
  let component: CirugiaFormularioDoctorComponent;
  let fixture: ComponentFixture<CirugiaFormularioDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirugiaFormularioDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CirugiaFormularioDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
