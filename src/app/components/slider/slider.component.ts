import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [MatSliderModule, FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  @Input()
  public sliderValue: number = 0;

  // En nommant l'output avec "sliderValue" + "Change", l'utilisateur
  // du composant va pouvoir effectuer du binding two way
  @Output()
  public sliderValueChange = new EventEmitter<number>();

  @Output()
  public sliderHasBeenClicked = new EventEmitter<ThemePalette>();

  @Input()
  public minSliderValue: number = 0;

  @Input()
  public maxSliderValue: number = 100;

  @Input()
  public showLabel: boolean = true;

  public sliderValueHasChange(): void {
    console.log('slider value has changed', this.sliderValue);
    this.sliderValueChange.emit(this.sliderValue);
  }

  public sliderClicked(): void {
    console.log('slider clicked');
    this.sliderHasBeenClicked.emit();
  }
}
