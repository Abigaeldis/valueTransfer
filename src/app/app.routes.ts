import { Routes } from '@angular/router';
import { SliderPageComponent } from './pages/sliderpage/sliderpage.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'slider', component: SliderPageComponent },
];
