import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryHouseComponent } from './military-house.component';

describe('MilitaryHouseComponent', () => {
  let component: MilitaryHouseComponent;
  let fixture: ComponentFixture<MilitaryHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilitaryHouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilitaryHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
