import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstilistaComponent } from './form-estilista.component';

describe('FormEstilistaComponent', () => {
  let component: FormEstilistaComponent;
  let fixture: ComponentFixture<FormEstilistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEstilistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEstilistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
