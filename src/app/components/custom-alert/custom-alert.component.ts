import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-alert',
  standalone: true,
  imports: [FormsModule, CommonModule, NgbAlertModule],
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.scss'],
})
export class CustomAlertComponent {
  userInput: string = '';
  alertMessage: string | null = null;
  showInput: boolean = true;
  alertType: string = 'success'; // Default type, adjust as needed

  showAlert() {
    this.alertMessage = this.userInput;
    this.showInput = false;
  }

  resetAlert() {
    this.alertMessage = null;
    this.showInput = true;
    this.userInput = '';
  }
}
