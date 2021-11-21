import { TestBed } from '@angular/core/testing';
import { MapComponent } from './map.component';

describe('MapComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MapComponent
      ],
    }).compileComponents();
  });

  it('should create the map', () => {
    const fixture = TestBed.createComponent(MapComponent);
    const map = fixture.componentInstance;
    expect(map).toBeTruthy();
  });

  it(`should have as title 'frontend'`, () => {
    const fixture = TestBed.createComponent(MapComponent);
    const map = fixture.componentInstance;
    expect(map.title).toEqual('frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MapComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('frontend map is running!');
  });
});
