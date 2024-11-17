import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceURL : string;

  constructor(private http : HttpClientModule) { 
    this.serviceURL = "http://localhost:4200/tasks"
  }

  
}
