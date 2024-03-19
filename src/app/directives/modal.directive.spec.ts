import { ModalDirective } from './modal.directive';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
const mockNgbModal = jasmine.createSpyObj('NgbModal', ['open', 'close']);

describe('ModaleDirective', () => {
  it('should create an instance', () => {
    const directive = new ModalDirective(mockNgbModal as any);
    expect(directive).toBeTruthy();
  });
});
