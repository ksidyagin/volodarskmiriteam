import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatamentOpenComponent } from './statament-open.component';

describe('StatamentOpenComponent', () => {
  let component: StatamentOpenComponent;
  let fixture: ComponentFixture<StatamentOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatamentOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatamentOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
