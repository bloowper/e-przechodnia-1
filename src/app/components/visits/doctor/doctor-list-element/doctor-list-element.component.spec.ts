import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListElementComponent } from './doctor-list-element.component';

describe('DoctorListElementComponent', () => {
  let component: DoctorListElementComponent;
  let fixture: ComponentFixture<DoctorListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
