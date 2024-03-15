import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [FormsModule, NgbAlertModule, CommonModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.scss',
})
export class StructuralDirectiveComponent {
  tasks: Task[] = [
    { id: 1, title: 'Complete Angular tutorial', completed: false },
    { id: 2, title: 'Write a blog post', completed: true },
    { id: 3, title: 'Work out', completed: false },
  ];

  showOnlyIncomplete: boolean = false;
  displayCount: number | null = null;
  colors: string[] = [];

  constructor() {
    this.generateColors();
  }

  generateColors(): void {
    this.colors = [];
    for (let i = 0; i < (this.displayCount || 0); i++) {
      this.colors.push(this.getRandomColor());
    }
  }

  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
