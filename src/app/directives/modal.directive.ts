import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModaleComponent } from '../components/modale/modale.component';

@Directive({
  selector: '[appModale]',
  standalone: true,
})
export class ModalDirective {
  @Input('appModale') pokemon: any;
  @Output() closeClicked = new EventEmitter<void>();

  constructor(private modalService: NgbModal) {}
  @HostListener('click') onClick() {
    const modalRef = this.modalService.open(ModaleComponent, {
      centered: true,
    });
    modalRef.componentInstance.pokemon = this.pokemon;
  }

  onClose(): void {
    console.log('on close modale ts');
    this.closeClicked.emit();
  }
}
