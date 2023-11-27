import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateDoctorComponent } from './modal-update-doctor.component';

describe('ModalUpdateDoctorComponent', () => {
  let component: ModalUpdateDoctorComponent;
  let fixture: ComponentFixture<ModalUpdateDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUpdateDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
