import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InNumbersComponent } from './in-numbers.component';

describe('InNumbersComponent', () => {
  let component: InNumbersComponent;
  let fixture: ComponentFixture<InNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
