import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCityComponent } from './project-city.component';

describe('ProjectCityComponent', () => {
  let component: ProjectCityComponent;
  let fixture: ComponentFixture<ProjectCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
