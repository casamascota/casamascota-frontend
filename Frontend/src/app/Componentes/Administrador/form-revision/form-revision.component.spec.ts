import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRevisionComponent } from './form-revision.component';

describe('FormRevisionComponent', () => {
  let component: FormRevisionComponent;
  let fixture: ComponentFixture<FormRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRevisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
