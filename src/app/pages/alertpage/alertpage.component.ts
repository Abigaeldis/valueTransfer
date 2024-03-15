import { Component } from '@angular/core';
import { CustomAlertComponent } from '../../components/custom-alert/custom-alert.component';

@Component({
  selector: 'app-alertpage',
  standalone: true,
  imports: [CustomAlertComponent],
  templateUrl: './alertpage.component.html',
  styleUrl: './alertpage.component.scss',
})
export class AlertpageComponent {}
