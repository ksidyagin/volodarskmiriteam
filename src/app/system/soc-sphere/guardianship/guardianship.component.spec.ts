import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianshipComponent } from './guardianship.component';

describe('GuardianshipComponent', () => {
  let component: GuardianshipComponent;
  let fixture: ComponentFixture<GuardianshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardianshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardianshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
