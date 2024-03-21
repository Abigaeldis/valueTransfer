import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModaleComponent } from '../components/modale/modale.component';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../entities/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Directive({
  selector: '[appModale]',
  standalone: true,
})
export class ModalDirective {
  @Input('appModale') pokemon: any;
  @Input() nextPokemon: any;
  @Input() prevPokemon: any;

  constructor(
    private modalService: NgbModal,
    private pokemonService: PokemonService
  ) {}

  @HostListener('click', ['$event.target']) onClick(target: HTMLElement) {
    const action = target.getAttribute('data-action');
    if (action === 'next' || action === 'prev') {
      this.handleNavigation(action);
    } else {
      this.openModal(this.pokemon);
    }
  }

  handleNavigation(action: string) {
    let targetPokemonId = this.pokemon.id; // Assuming ID is directly accessible and a number
    if (action === 'next') {
      targetPokemonId++;
    } else if (action === 'prev' && targetPokemonId > 1) {
      targetPokemonId--;
    }

    this.pokemonService.getEvolutionById(targetPokemonId).subscribe(
      (pokemon) => {
        this.openModal(pokemon);
      },
      (error) => {
        console.error('Failed to fetch Pokémon:', error);
      }
    );
  }

  openModal(pokemon: Pokemon) {
    const modalRef = this.modalService.open(ModaleComponent, {
      centered: true,
    });
    console.log('after button pressed', pokemon);
    modalRef.componentInstance.pokemon = pokemon;
  }
}
