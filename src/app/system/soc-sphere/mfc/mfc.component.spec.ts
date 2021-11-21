import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfcComponent } from './mfc.component';

describe('MfcComponent', () => {
  let component: MfcComponent;
  let fixture: ComponentFixture<MfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
