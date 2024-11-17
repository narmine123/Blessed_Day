import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [NavbarComponent,DashboardComponent],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

}
