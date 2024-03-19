import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Pokemon } from '../entities/pokemon';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

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
                  // Map the details to a Pokemon object
                  const pokemon: Pokemon = {
                    id: details.id,
                    name: details.name,
                    type: details.types.map(
                      (typeEntry: any) => typeEntry.type.name
                    ),
                    artworkUrl:
                      details.sprites.other['official-artwork'].front_default,
                  };

                  return pokemon;
                })
              )
            )
          ) as Observable<Pokemon[]>;
        })
      );
  }

  private savePokemon(): void {}
}
