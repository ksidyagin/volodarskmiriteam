import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsEconomyComponent } from './reports-economy.component';

describe('ReportsEconomyComponent', () => {
  let component: ReportsEconomyComponent;
  let fixture: ComponentFixture<ReportsEconomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsEconomyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsEconomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
