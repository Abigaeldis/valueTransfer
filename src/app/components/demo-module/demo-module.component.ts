import { Component } from '@angular/core';
import { DigimonModule } from '../../modules/digimon/digimon.module';
import { Observable, delay, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo-module',
  standalone: true,
  imports: [DigimonModule, CommonModule],
  templateUrl: './demo-module.component.html',
  styleUrl: './demo-module.component.scss',
})
export class DemoModuleComponent {
  public michel$: Observable<string> = of('Michel').pipe(delay(1000));

  constructor() {
    this.michel$.subscribe((s) => console.log('Michel ?', s));
  }
}
