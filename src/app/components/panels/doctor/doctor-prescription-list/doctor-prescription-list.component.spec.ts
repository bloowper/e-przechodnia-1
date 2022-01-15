import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPrescriptionListComponent } from './doctor-prescription-list.component';

describe('DoctorPrescriptionListComponent', () => {
  let component: DoctorPrescriptionListComponent;
  let fixture: ComponentFixture<DoctorPrescriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorPrescriptionListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPrescriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
