import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateCitasComponent } from './modal-update-citas.component';

describe('ModalUpdateCitasComponent', () => {
  let component: ModalUpdateCitasComponent;
  let fixture: ComponentFixture<ModalUpdateCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUpdateCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
