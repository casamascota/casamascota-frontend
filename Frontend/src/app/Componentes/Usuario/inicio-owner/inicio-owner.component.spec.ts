import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioOwnerComponent } from './inicio-owner.component';

describe('InicioOwnerComponent', () => {
  let component: InicioOwnerComponent;
  let fixture: ComponentFixture<InicioOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
