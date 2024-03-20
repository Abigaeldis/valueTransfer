import { Component } from '@angular/core';
import { DigimonAPIService } from '../../services/digimon-api.service';
import { Digimon, Pageable } from '../../entities/digimon';

@Component({
  selector: 'app-digidex',
  templateUrl: './digidex.component.html',
  styleUrls: ['./digidex.component.scss'],
})
export class DigidexComponent {
  digimons: Digimon[] = [];
  pageable: Pageable | null = null;

  constructor(private digimonAPIService: DigimonAPIService) {
    this.loadDigimons(0);
  }

  loadDigimons(page: number) {
    this.digimonAPIService.getDigimonsByPage(page).subscribe((data) => {
      this.digimons = data.digimons;
      this.pageable = data.pageable;
    });
  }

  goToNextPage() {
    if (
      this.pageable &&
      this.pageable.currentPage < this.pageable.totalPages - 1
    ) {
      this.loadDigimons(this.pageable.currentPage + 1);
    }
  }

  goToPreviousPage() {
    if (this.pageable && this.pageable.currentPage > 0) {
      this.loadDigimons(this.pageable.currentPage - 1);
    }
  }
}
