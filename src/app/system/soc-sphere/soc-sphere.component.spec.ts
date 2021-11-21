import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocSphereComponent } from './soc-sphere.component';

describe('SocSphereComponent', () => {
  let component: SocSphereComponent;
  let fixture: ComponentFixture<SocSphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocSphereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocSphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
