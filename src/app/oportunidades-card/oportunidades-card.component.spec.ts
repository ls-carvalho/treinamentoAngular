import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadesCardComponent } from './oportunidades-card.component';

describe('OportunidadesCardComponent', () => {
  let component: OportunidadesCardComponent;
  let fixture: ComponentFixture<OportunidadesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OportunidadesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OportunidadesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
