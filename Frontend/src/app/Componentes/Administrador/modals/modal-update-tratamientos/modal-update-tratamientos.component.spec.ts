import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateTratamientosComponent } from './modal-update-tratamientos.component';

describe('ModalUpdateTratamientosComponent', () => {
  let component: ModalUpdateTratamientosComponent;
  let fixture: ComponentFixture<ModalUpdateTratamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateTratamientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUpdateTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
