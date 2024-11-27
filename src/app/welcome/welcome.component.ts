import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports:[HttpClientModule],
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
