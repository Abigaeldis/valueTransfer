import { TestBed } from '@angular/core/testing';

import { DigimonAPIService } from './digimon-api.service';

describe('DigimonAPIService', () => {
  let service: DigimonAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigimonAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
