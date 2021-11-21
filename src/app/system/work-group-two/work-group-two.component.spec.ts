import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkGroupTwoComponent } from './work-group-two.component';

describe('WorkGroupTwoComponent', () => {
  let component: WorkGroupTwoComponent;
  let fixture: ComponentFixture<WorkGroupTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkGroupTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkGroupTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
