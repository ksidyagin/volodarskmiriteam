import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEducComponent } from './profile-educ.component';

describe('ProfileEducComponent', () => {
  let component: ProfileEducComponent;
  let fixture: ComponentFixture<ProfileEducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileEducComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
