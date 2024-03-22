import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { SelectComponent } from '../select/select.component';
import { CustomInputComponent } from '../custom-input/custom-input.component';

@Component({
  selector: 'app-form-create',
  imports: [ReactiveFormsModule, SelectComponent, CustomInputComponent],
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss'],
  standalone: true,
})
export class FormCreateComponent {
  pokemonForm: FormGroup;
  Inputname: string = 'Pokemon name';
  pokemonTypes = [
    { value: 'normal', viewValue: 'Normal' },
    { value: 'fire', viewValue: 'Fire' },
    { value: 'water', viewValue: 'Water' },
    { value: 'electric', viewValue: 'Electric' },
    { value: 'grass', viewValue: 'Grass' },
    { value: 'ice', viewValue: 'Ice' },
    { value: 'fighting', viewValue: 'Fighting' },
    { value: 'poison', viewValue: 'Poison' },
    { value: 'ground', viewValue: 'Ground' },
    { value: 'flying', viewValue: 'Flying' },
    { value: 'psychic', viewValue: 'Psychic' },
    { value: 'bug', viewValue: 'Bug' },
    { value: 'rock', viewValue: 'Rock' },
    { value: 'ghost', viewValue: 'Ghost' },
    { value: 'dragon', viewValue: 'Dragon' },
    { value: 'dark', viewValue: 'Dark' },
    { value: 'steel', viewValue: 'Steel' },
    { value: 'fairy', viewValue: 'Fairy' },
  ];

  constructor(private fb: FormBuilder, private pokemonService: PokemonService) {
    this.pokemonForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.pokemonForm.value);
    this.pokemonService.addPokemon(this.pokemonForm.value);
  }

  onTypeSelected(type: string): void {
    this.pokemonForm.get('type')?.setValue(type);
  }

  onNameEntered(name: string): void {
    this.pokemonForm.get('name')?.setValue(name);
  }
}
