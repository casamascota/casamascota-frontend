import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTratamientosDoctorComponent } from './lista-tratamientos-doctor.component';

describe('ListaTratamientosDoctorComponent', () => {
  let component: ListaTratamientosDoctorComponent;
  let fixture: ComponentFixture<ListaTratamientosDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTratamientosDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTratamientosDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
