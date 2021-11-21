import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEducationComponent } from './project-education.component';

describe('ProjectEducationComponent', () => {
  let component: ProjectEducationComponent;
  let fixture: ComponentFixture<ProjectEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEducationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
