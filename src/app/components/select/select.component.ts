import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

interface SelectOption {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  standalone: true,
})
export class SelectComponent {
  @Input() options: SelectOption[] = [];
  @Output() selectionChange = new EventEmitter<string>();

  onSelect(value: string) {
    this.selectionChange.emit(value);
  }
}
