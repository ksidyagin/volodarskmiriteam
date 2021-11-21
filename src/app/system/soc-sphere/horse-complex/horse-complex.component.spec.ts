import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorseComplexComponent } from './horse-complex.component';

describe('HorseComplexComponent', () => {
  let component: HorseComplexComponent;
  let fixture: ComponentFixture<HorseComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorseComplexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorseComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
