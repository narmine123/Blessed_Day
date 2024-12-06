import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-routine',
  standalone: true, // Ajoutez cette ligne
  imports: [CommonModule, FormsModule,NavbarComponent], // Importez les modules nécessaires
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})


export class RoutineComponent {

  sectionVisibility = {
    hydration: false,
    prayer: false,
    motivational: false,
    sport: false,
  };

  // Hydration Data
  glasses: boolean[] = [false, false, false, false];
  glassCount: number = 4;

  // Prayer Data
  fivePrayers = [
    { name: 'Fajr', completed: false },
    { name: 'Dhuhr', completed: false },
    { name: 'Asr', completed: false },
    { name: 'Maghrib', completed: false },
    { name: 'Isha', completed: false },
  ];

  // Motivational Ideas
  ideasList: string[] = [
    'Start your day with a smile',
    'Write down three things you are grateful for',
    'Take 5 deep breaths to relax',
    'Listen to an inspiring podcast',
    'Set one achievable goal for the day',
  ];

  // Sport Data
  sports = [
    { name: 'Run 5 km', completed: false },
    { name: 'Do 20 push-ups', completed: false },
    { name: 'Stretch for 15 minutes', completed: false },
    { name: 'Cycle for 30 minutes', completed: false },
  ];

  // Toggle the visibility of a section
  // Limitez le type de section aux clés valides de sectionVisibility
toggleSection(section: keyof typeof this.sectionVisibility) {
  this.sectionVisibility[section] = !this.sectionVisibility[section];
}

  // Toggle hydration glasses
  toggleGlass(index: number) {
    this.glasses[index] = !this.glasses[index];
  }

  // Regenerate glasses based on count
  generateGlasses() {
    this.glasses = Array(this.glassCount).fill(false);
  }

  
}

