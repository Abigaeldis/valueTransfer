import { Component } from '@angular/core';
import { StructuralDirectiveComponent } from '../../components/structural-directive/structural-directive.component';

@Component({
  selector: 'app-structural-directive-page',
  standalone: true,
  imports: [StructuralDirectiveComponent],
  templateUrl: './structural-directive-page.component.html',
  styleUrl: './structural-directive-page.component.scss',
})
export class StructuralDirectivePageComponent {}
