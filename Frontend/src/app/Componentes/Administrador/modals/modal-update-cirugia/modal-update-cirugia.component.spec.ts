import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateCirugiaComponent } from './modal-update-cirugia.component';

describe('ModalUpdateCirugiaComponent', () => {
  let component: ModalUpdateCirugiaComponent;
  let fixture: ComponentFixture<ModalUpdateCirugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUpdateCirugiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUpdateCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
