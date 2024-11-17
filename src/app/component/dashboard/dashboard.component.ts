import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  showTaskDetails = false;

  toggleTaskDetails() {
    this.showTaskDetails = !this.showTaskDetails;
  }

}
