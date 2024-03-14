import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

  @Input()
  public min: number = 0;

  @Input()
  public max: number = 100;

  @Input()
  public showLabel: boolean = true;
}
