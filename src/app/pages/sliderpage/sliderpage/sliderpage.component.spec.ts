import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderPageComponent } from './sliderpage.component';

describe('SliderpageComponent', () => {
  let component: SliderPageComponent;
  let fixture: ComponentFixture<SliderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SliderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
