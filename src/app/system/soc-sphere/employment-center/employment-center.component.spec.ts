import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentCenterComponent } from './employment-center.component';

describe('EmploymentCenterComponent', () => {
  let component: EmploymentCenterComponent;
  let fixture: ComponentFixture<EmploymentCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
