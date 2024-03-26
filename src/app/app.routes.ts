import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { DirectivesShowdownComponent } from './components/directives-showdown/directives-showdown.component';
import { NgTemplateDemoComponent } from './components/ng-template-demo/ng-template-demo.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { DemoModuleComponent } from './components/demo-module/demo-module.component';
import { CustomAlertComponent } from './components/custom-alert/custom-alert.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'slider',
    loadComponent: () =>
      import('./pages/sliderpage/sliderpage.component').then(
        (f) => f.SliderPageComponent
      ),
  },
  { path: 'alert', component: CustomAlertComponent },
  { path: 'structuralDirective', component: StructuralDirectiveComponent },
  { path: 'pokemons', component: PokemonsComponent },
  { path: 'directives', component: DirectivesShowdownComponent },
  { path: 'ngTemplate', component: NgTemplateDemoComponent },
  { path: 'reactiveForms', component: ReactiveFormsComponent },
  { path: 'pipe', component: PipeDemoComponent },
  { path: 'demoModule', component: DemoModuleComponent },
  { path: 'login', component: LoginComponent },
];
