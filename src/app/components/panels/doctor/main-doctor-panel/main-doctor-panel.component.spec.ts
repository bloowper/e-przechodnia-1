import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDoctorPanelComponent } from './main-doctor-panel.component';

describe('MainDoctorPanelComponent', () => {
  let component: MainDoctorPanelComponent;
  let fixture: ComponentFixture<MainDoctorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDoctorPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDoctorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
