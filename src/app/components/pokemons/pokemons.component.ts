import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../entities/pokemon';
import { CommonModule } from '@angular/common';
import { ModaleComponent } from '../modale/modale.component';
import { ModalDirective } from '../../directives/modal.directive';
import { FormCreateComponent } from '../form-create/form-create.component';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
  standalone: true,
  imports: [CommonModule, ModaleComponent, ModalDirective, FormCreateComponent],
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  pokemonsStored: Pokemon[] = [];
  selectedPokemon: Pokemon | null = null;

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

  constructor(private PokemonService: PokemonService) {}

  ngOnInit(): void {
    this.PokemonService.pokemons$.subscribe((pokemons) => {
      this.pokemons = pokemons;
    });

    this.PokemonService.loadStoredPokemons();
  }

  getColorByType(type: string | undefined): string {
    return type ? this.colors[type] || '#F5F5F5' : '#F5F5F5';
  }

  onPokemonClick(pokemonId?: number): void {
    if (pokemonId === undefined) {
      console.warn('Pokemon ID is undefined');
      return;
    }

    this.PokemonService.getEvolutionById(pokemonId).subscribe({
      next: (pokemon) => {
        console.log(pokemon);

        if (pokemon.id) {
          const evolutionPokedexId = pokemon.id;

          this.PokemonService.getPokemonDetailsFromPokeAPI(
            evolutionPokedexId
          ).subscribe({
            next: (evolutionDetails) => {
              console.log(evolutionDetails);
            },
            error: (error) =>
              console.error(
                'Failed to fetch evolution details from PokeAPI',
                error
              ),
          });
        }
      },
      error: (error) => console.error('Failed to fetch evolution data', error),
    });
  }
}
