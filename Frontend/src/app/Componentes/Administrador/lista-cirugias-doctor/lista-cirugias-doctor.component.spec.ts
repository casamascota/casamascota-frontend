import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCirugiasDoctorComponent } from './lista-cirugias-doctor.component';

describe('ListaCirugiasDoctorComponent', () => {
  let component: ListaCirugiasDoctorComponent;
  let fixture: ComponentFixture<ListaCirugiasDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCirugiasDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCirugiasDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
