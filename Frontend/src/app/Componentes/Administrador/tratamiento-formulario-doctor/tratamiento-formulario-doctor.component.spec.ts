import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoFormularioDoctorComponent } from './tratamiento-formulario-doctor.component';

describe('TratamientoFormularioDoctorComponent', () => {
  let component: TratamientoFormularioDoctorComponent;
  let fixture: ComponentFixture<TratamientoFormularioDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamientoFormularioDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamientoFormularioDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
