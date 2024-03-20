import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../entities/pokemon';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modale.component.html',
  styleUrl: './modale.component.scss',
})
export class ModaleComponent {
  @Input() pokemon: Pokemon | null = null;

  colors: { [key: string]: string } = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
  };

  constructor(private activeModal: NgbActiveModal) {}

  onClose() {
    this.activeModal.close();
  }

  playCry(cryUrl: string): void {
    const audio = new Audio(cryUrl);
    audio
      .play()
      .catch((error) => console.error('Error playing the cry:', error));

    console.log(this.pokemon, 'cries', this.pokemon?.cries?.latest, cryUrl);
  }

  getColorByType(type: string | undefined): string {
    return type ? this.colors[type] || '#F5F5F5' : '#F5F5F5';
  }
}
