import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalProjectsComponent } from './national-projects.component';

describe('NationalProjectsComponent', () => {
  let component: NationalProjectsComponent;
  let fixture: ComponentFixture<NationalProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NationalProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
