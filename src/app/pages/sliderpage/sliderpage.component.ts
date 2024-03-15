import { Component, Input } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-sliderpage',
  standalone: true,
  imports: [SliderComponent, ProgressBarComponent],
  templateUrl: './sliderpage.component.html',
  styleUrl: './sliderpage.component.scss',
})
export class SliderPageComponent {
  public v1 = 50;
  public v2 = 50;

  public label: string = 'info';
  public label2: string = 'info';

  public sliderClicked(): void {
    const colorOptions: string[] = ['success', 'info', 'warning', 'danger'];
    const randomIndex = Math.floor(Math.random() * colorOptions.length);
    this.label2 = colorOptions[randomIndex];

    console.log(this.label);
  }

  constructor() {
    setInterval(() => {
      this.v1 = Math.random() * 100;
      const colorOptions: string[] = ['success', 'info', 'warning', 'danger'];
      const randomIndex = Math.floor(Math.random() * colorOptions.length);
      this.label = colorOptions[randomIndex];
    }, 500);
  }
}
