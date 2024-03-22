// custom-input.component.ts
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class CustomInputComponent {
  @Output() valueChange = new EventEmitter<string>();
  @Input() option: string = '';

  onValueChange(value: string | null) {
    if (value) {
      this.valueChange.emit(value);
    } else {
      console.log('Input value is null or undefined.');
      this.valueChange.emit('');
    }
  }
}
