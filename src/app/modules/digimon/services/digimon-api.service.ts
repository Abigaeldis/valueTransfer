// digimon-api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Digimons, Pageable } from '../entities/digimon';

@Injectable({
  providedIn: 'root',
})
export class DigimonAPIService {
  private apiUrl = 'https://digi-api.com/api/v1/digimon';

  constructor(private httpClient: HttpClient) {}

  public getDigimonsByPage(
    page: number = 0
  ): Observable<{ digimons: Digimons; pageable: Pageable }> {
    return this.httpClient
      .get<{ content: Digimons; pageable: Pageable }>(
        `${this.apiUrl}?page=${page}`
      )
      .pipe(
        map((response) => ({
          digimons: response.content,
          pageable: {
            currentPage: response.pageable.currentPage,
            elementsOnPage: response.pageable.elementsOnPage,
            totalElements: response.pageable.totalElements,
            totalPages: response.pageable.totalPages,
            previousPage: response.pageable.previousPage,
            nextPage: response.pageable.nextPage,
          },
        }))
      );
  }
}
