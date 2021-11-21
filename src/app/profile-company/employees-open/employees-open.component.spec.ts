import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesOpenComponent } from './employees-open.component';

describe('EmployeesOpenComponent', () => {
  let component: EmployeesOpenComponent;
  let fixture: ComponentFixture<EmployeesOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
