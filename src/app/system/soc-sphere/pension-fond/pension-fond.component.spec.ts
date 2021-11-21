import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionFondComponent } from './pension-fond.component';

describe('PensionFondComponent', () => {
  let component: PensionFondComponent;
  let fixture: ComponentFixture<PensionFondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionFondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionFondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
