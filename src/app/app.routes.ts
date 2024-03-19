import { Routes } from '@angular/router';
import { SliderPageComponent } from './pages/sliderpage/sliderpage.component';
import { HomeComponent } from './pages/home/home.component';
import { AlertpageComponent } from './pages/alertpage/alertpage.component';
import { StructuralDirectivePageComponent } from './pages/structural-directive-page/structural-directive-page.component';

import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { DirectivesShowdownComponent } from './components/directives-showdown/directives-showdown.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'slider', component: SliderPageComponent },
  { path: 'alert', component: AlertpageComponent },
  { path: 'structuralDirective', component: StructuralDirectivePageComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'directives', component: DirectivesShowdownComponent },
];
