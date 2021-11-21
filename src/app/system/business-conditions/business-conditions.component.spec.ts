import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessConditionsComponent } from './business-conditions.component';

describe('BusinessConditionsComponent', () => {
  let component: BusinessConditionsComponent;
  let fixture: ComponentFixture<BusinessConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
