import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'app-sliderpage',
  standalone: true,
  imports: [SliderComponent, ProgressBarComponent],
  templateUrl: './sliderpage.component.html',
  styleUrl: './sliderpage.component.scss',
})
export class SliderPageComponent {
  public v1 = 10;
}
