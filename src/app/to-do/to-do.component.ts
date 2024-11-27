import { Component, destroyPlatform, importProvidersFrom } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [NavbarComponent,DashboardComponent,HttpClientModule],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {

}
