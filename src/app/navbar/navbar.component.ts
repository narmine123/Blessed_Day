import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoComponent } from '../to-do/to-do.component';
import { SkillComponent } from '../skill/skill.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router) {}

  goTodo() {
    this.router.navigate(['/to-do']);
  }
  goToSkill(){
    this.router.navigate(['/skill']);
  }
  goToWelcome(){
    this.router.navigate(['/welcome']);
  }
  goToStatic(){
    this.router.navigate(['/static'])
  }
}
