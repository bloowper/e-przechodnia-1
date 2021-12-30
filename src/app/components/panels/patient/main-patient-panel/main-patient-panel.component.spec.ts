import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPatientPanelComponent } from './main-patient-panel.component';

describe('MainPatientPanelComponent', () => {
  let component: MainPatientPanelComponent;
  let fixture: ComponentFixture<MainPatientPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPatientPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPatientPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
