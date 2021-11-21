import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementsOpenComponent } from './statements-open.component';

describe('StatementsOpenComponent', () => {
  let component: StatementsOpenComponent;
  let fixture: ComponentFixture<StatementsOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementsOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementsOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
