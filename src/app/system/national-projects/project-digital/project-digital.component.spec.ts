import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDigitalComponent } from './project-digital.component';

describe('ProjectDigitalComponent', () => {
  let component: ProjectDigitalComponent;
  let fixture: ComponentFixture<ProjectDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDigitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
