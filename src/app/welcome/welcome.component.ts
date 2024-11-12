import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoComponent } from '../to-do/to-do.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports:[],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'] 
})
export class WelcomeComponent {

  constructor(private router: Router) {}

  goTodo() {
    this.router.navigate(['/to-do']);
  }
  goToSkill(){
    this.router.navigate(['/skill']);
  }
}
