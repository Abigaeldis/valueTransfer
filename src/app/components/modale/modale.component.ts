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

  constructor(private activeModal: NgbActiveModal) {}

  onClose() {
    this.activeModal.close();
  }
}
