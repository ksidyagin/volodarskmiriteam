import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicNationalComponent } from './graphic-national.component';

describe('GraphicNationalComponent', () => {
  let component: GraphicNationalComponent;
  let fixture: ComponentFixture<GraphicNationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicNationalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
