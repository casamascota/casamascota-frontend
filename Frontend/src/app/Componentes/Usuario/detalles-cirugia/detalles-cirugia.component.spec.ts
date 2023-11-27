import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCirugiaComponent } from './detalles-cirugia.component';

describe('DetallesCirugiaComponent', () => {
  let component: DetallesCirugiaComponent;
  let fixture: ComponentFixture<DetallesCirugiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesCirugiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
