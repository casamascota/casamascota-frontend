import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasAgendadasDoctorComponent } from './citas-agendadas-doctor.component';

describe('CitasAgendadasDoctorComponent', () => {
  let component: CitasAgendadasDoctorComponent;
  let fixture: ComponentFixture<CitasAgendadasDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasAgendadasDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasAgendadasDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
