import { Component, Input } from '@angular/core';
import { Pokemon } from '../../entities/pokemon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modale.component.html',
  styleUrl: './modale.component.scss',
})
export class ModaleComponent {
  @Input() pokemon: Pokemon | null = null;
}
