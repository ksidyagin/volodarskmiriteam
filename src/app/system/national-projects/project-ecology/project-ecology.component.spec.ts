import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEcologyComponent } from './project-ecology.component';

describe('ProjectEcologyComponent', () => {
  let component: ProjectEcologyComponent;
  let fixture: ComponentFixture<ProjectEcologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEcologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEcologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
