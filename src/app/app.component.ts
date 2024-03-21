import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { DigimonModule } from './modules/digimon/digimon.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ProgressBarComponent,
    HttpClientModule,
    DigimonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'valueTransfer';

  constructor(private PokemonService: PokemonService) {}
}
