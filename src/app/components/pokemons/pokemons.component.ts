import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../entities/pokemon';
import { CommonModule } from '@angular/common';
import { ModaleComponent } from '../modale/modale.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
  standalone: true,
  imports: [CommonModule, ModaleComponent],
})
export class PokemonsComponent implements OnInit {
  pokemons: Pokemon[] = [];
  selectedPokemon: Pokemon | null = null;
  isModalVisible: boolean = false;

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

  constructor(
    private PokemonService: PokemonService,
    private ngbModal: NgbModal
  ) {}

  ngOnInit(): void {
    this.PokemonService.getPokemons().subscribe({
      next: (data) => {
        this.pokemons = data;
      },
      error: (err) => console.error(err),
    });
  }

  getColorByType(type: string | undefined): string {
    return type ? this.colors[type] || '#F5F5F5' : '#F5F5F5';
  }

  onSelectPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;

    const modalRef = this.ngbModal.open(ModaleComponent, { centered: true });
    modalRef.componentInstance.pokemon = pokemon;
  }

  onCloseModal(): void {
    this.isModalVisible = false;
  }
}
