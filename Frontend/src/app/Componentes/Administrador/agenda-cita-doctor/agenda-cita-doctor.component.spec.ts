import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCitaDoctorComponent } from './agenda-cita-doctor.component';

describe('AgendaCitaDoctorComponent', () => {
  let component: AgendaCitaDoctorComponent;
  let fixture: ComponentFixture<AgendaCitaDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaCitaDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaCitaDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
