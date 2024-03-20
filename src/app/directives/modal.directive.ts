import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModaleComponent } from '../components/modale/modale.component';
import { Evolution } from '../entities/pokemon';

@Directive({
  selector: '[appModale]',
  standalone: true,
})
export class ModalDirective {
  @Input('appModale') pokemon: any;
  @Input() evolution: Evolution | null = null; // New input for evolution data
  @Output() closeClicked = new EventEmitter<void>();

  constructor(private modalService: NgbModal) {}

  @HostListener('click') onClick() {
    const modalRef = this.modalService.open(ModaleComponent, {
      centered: true,
    });
    console.log('Opening modal for:', this.pokemon);
    console.log('Passing modal for:', this.evolution);
    modalRef.componentInstance.pokemon = this.pokemon;
    modalRef.componentInstance.evolution = this.evolution;
  }

  onClose(): void {
    console.log('on close modale ts');
    this.closeClicked.emit();
  }
}
