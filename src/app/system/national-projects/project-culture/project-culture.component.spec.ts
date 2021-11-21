import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCultureComponent } from './project-culture.component';

describe('ProjectCultureComponent', () => {
  let component: ProjectCultureComponent;
  let fixture: ComponentFixture<ProjectCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
