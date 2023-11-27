import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoFormularioComponent } from './tratamiento-formulario.component';

describe('TratamientoFormularioComponent', () => {
  let component: TratamientoFormularioComponent;
  let fixture: ComponentFixture<TratamientoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratamientoFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratamientoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
