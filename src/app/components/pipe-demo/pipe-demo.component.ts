import { Component } from '@angular/core';
import { MajusculeUneSurXPipe } from '../../pipes/majuscule-une-sur-x.pipe';

@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [MajusculeUneSurXPipe],
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.scss',
})
export class PipeDemoComponent {}
