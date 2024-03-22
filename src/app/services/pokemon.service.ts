import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Pokemon } from '../entities/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';
  private apiUrlEvo = 'https://pokebuildapi.fr/api/v1/pokemon';

  // BehaviorSubject to hold the list of pokemons
  private pokemonsSubject = new BehaviorSubject<Pokemon[]>([]);
  public pokemons$ = this.pokemonsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  // Load initial data and populate the BehaviorSubject
  private loadInitialData() {
    // Attempt to load pokemons from local storage first.
    const storedPokemons = JSON.parse(localStorage.getItem('pokemons') || '[]');
    this.pokemonsSubject.next(storedPokemons); // Load stored pokemons first

    this.http
      .get<{ results: { name: string; url: string }[] }>(this.apiUrl)
      .pipe(
        switchMap((response) =>
          this.fetchPokemonDetails(
            response.results.map((pokemon) => pokemon.url)
          )
        ),
        map((apiPokemons) => {
          // Combine API pokemons with those already loaded from local storage.
          const currentStoredPokemons = this.pokemonsSubject.value;
          return [
            ...currentStoredPokemons,
            ...apiPokemons.filter(
              (apiPokemon) =>
                !currentStoredPokemons.some(
                  (storedPokemon) => storedPokemon.id === apiPokemon.id
                )
            ),
          ];
        })
      )
      .subscribe((combinedPokemons) => {
        this.pokemonsSubject.next(combinedPokemons);
        // Optionally, update local storage here if you want to synchronize it.
      });
  }

  private fetchPokemonDetails(urls: string[]): Observable<Pokemon[]> {
    return forkJoin(
      urls.map((url) =>
        this.http
          .get<Pokemon>(url)
          .pipe(map((details) => this.mapToPokemon(details)))
      )
    );
  }

  private mapToPokemon(details: any): Pokemon {
    return {
      id: details.id,
      name: details.name,
      type: details.types.map((t: any) => t.type.name),
      artworkUrl: details.sprites.other['official-artwork'].front_default,
      // Ensure to handle the case where 'cries' might not be available as expected.
      cries: {
        latest: details.cries?.latest || '',
        legacy: details.cries?.legacy || '',
      },
    };
  }

  // Function to add a new pokemon to the list
  public addPokemon(pokemon: Pokemon) {
    const currentPokemons = this.pokemonsSubject.value;
    const updatedPokemons = [...currentPokemons, pokemon];
    this.pokemonsSubject.next(updatedPokemons);
    localStorage.setItem('pokemons', JSON.stringify(updatedPokemons));
  }

  // Load pokemons stored in local storage
  public loadStoredPokemons() {
    const storedPokemons = JSON.parse(localStorage.getItem('pokemons') || '[]');
    this.pokemonsSubject.next(storedPokemons);
  }

  getEvolutionById(id: number): Observable<Pokemon> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
      map((details) => {
        return {
          id: details.id,
          name: details.name,
          type: details.types.map((t: any) => t.type.name),
          artworkUrl: details.sprites.other['official-artwork'].front_default,
          cries: details.cries,
        };
      })
    );
  }

  getPokemonDetailsFromPokeAPI(pokedexId: number): Observable<any> {
    const url = `${this.apiUrlEvo}/${pokedexId}`;
    return this.http.get<any>(url);
  }
}
