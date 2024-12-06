import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToDoComponent } from './to-do/to-do.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutineComponent } from './routine/routine.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WelcomeComponent,ToDoComponent,HttpClientModule,RoutineComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blessed_Day';

  
}
