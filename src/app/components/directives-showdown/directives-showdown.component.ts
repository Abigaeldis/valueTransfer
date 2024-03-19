import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-directives-showdown',
  standalone: true,
  imports: [HighlightDirective],
  templateUrl: './directives-showdown.component.html',
  styleUrl: './directives-showdown.component.scss',
})
export class DirectivesShowdownComponent {}
