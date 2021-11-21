import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocSpherePageComponent } from './soc-sphere-page.component';

describe('SocSpherePageComponent', () => {
  let component: SocSpherePageComponent;
  let fixture: ComponentFixture<SocSpherePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocSpherePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocSpherePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
