import { Component, Input } from '@angular/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [NgbProgressbarModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
  @Input()
  public progressValue: number = 0;

  @Input()
  public progressType: string = 'info';
}
