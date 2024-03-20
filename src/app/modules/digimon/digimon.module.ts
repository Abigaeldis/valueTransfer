import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigidexComponent } from './components/digidex/digidex.component';
import { HttpClientModule } from '@angular/common/http';
import { DigimonAPIService } from './services/digimon-api.service';

@NgModule({
  declarations: [DigidexComponent],
  exports: [DigidexComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [DigimonAPIService],
})
export class DigimonModule {}
