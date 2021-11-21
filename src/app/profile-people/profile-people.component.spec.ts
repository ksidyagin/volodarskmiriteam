import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePeopleComponent } from './profile-people.component';

describe('ProfilePeopleComponent', () => {
  let component: ProfilePeopleComponent;
  let fixture: ComponentFixture<ProfilePeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
