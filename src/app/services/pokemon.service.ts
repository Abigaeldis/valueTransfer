import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Pokemon } from '../entities/pokemon';
import { Evolution } from '../entities/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=100';
  private apiUrlEvo = 'https://pokebuildapi.fr/api/v1/pokemon';

  constructor(private http: HttpClient) {}

  public getPokemons(): Observable<Pokemon[]> {
    return this.http
      .get<{ results: { name: string; url: string }[] }>(this.apiUrl)
      .pipe(
        switchMap((response) => {
          const pokemonDetailsUrls = response.results.map(
            (pokemon) => pokemon.url
          );
          return forkJoin(
            pokemonDetailsUrls.map((url) =>
              this.http.get(url).pipe(
                map((details: any) => {
                  const pokemon: Pokemon = {
                    id: details.id,
                    name: details.name,
                    type: details.types.map(
                      (typeEntry: any) => typeEntry.type.name
                    ),
                    artworkUrl:
                      details.sprites.other['official-artwork'].front_default,
                    cries: details.cries,
                  };

                  return pokemon;
                })
              )
            )
          ) as Observable<Pokemon[]>;
        })
      );
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
