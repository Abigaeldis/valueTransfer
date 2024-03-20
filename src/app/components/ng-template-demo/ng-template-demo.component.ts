import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-template-demo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ng-template-demo.component.html',
  styleUrls: ['./ng-template-demo.component.scss'],
})
export class NgTemplateDemoComponent implements OnInit {
  userForm!: FormGroup; // Define the FormGroup here

  constructor(private fb: FormBuilder) {} // Inject FormBuilder

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
    // Gerer l'envoi du form en BDD
  }
}
