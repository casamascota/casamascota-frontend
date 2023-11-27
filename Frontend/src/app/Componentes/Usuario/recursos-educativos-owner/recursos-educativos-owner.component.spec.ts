import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosEducativosOwnerComponent } from './recursos-educativos-owner.component';

describe('RecursosEducativosOwnerComponent', () => {
  let component: RecursosEducativosOwnerComponent;
  let fixture: ComponentFixture<RecursosEducativosOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursosEducativosOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecursosEducativosOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
