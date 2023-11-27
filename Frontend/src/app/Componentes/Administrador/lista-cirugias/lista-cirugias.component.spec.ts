import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCirugiasComponent } from './lista-cirugias.component';

describe('ListaCirugiasComponent', () => {
  let component: ListaCirugiasComponent;
  let fixture: ComponentFixture<ListaCirugiasComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ ListaCirugiasComponent ]
    })
    .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCirugiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
