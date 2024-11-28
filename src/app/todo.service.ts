import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tache } from './Tache';
import { SubTask } from './SubTask';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 
    link  = 'http://localhost:3000/tache'; 
    private taches: Tache[];

    constructor(private http: HttpClient) {
      this.taches = [
        new Tache(
          1,
          'Tâche 1',
          'Description de la tâche 1',
          new Date('2024-11-01'),
          new Date('2024-11-05'),
          new Date('2024-11-30'),
          1,
          'En cours',
          new Date('2024-11-30'),
          new Date('2024-12-02'),
          new Date('2024-12-02'),
          '50%'
        ),
        new Tache(
          2,
          'Tâche 2',
          'Description de la tâche 2',
          new Date('2024-11-10'),
          new Date('2024-11-12'),
          new Date('2024-12-05'),
          2,
          'Non commencée',
          new Date('2024-12-01'),
          new Date('2024-12-11'),
          new Date('2024-12-11'),
          '20%'
        )
      ];
      
    }
    getTache():Observable< Tache[]>{
      return this.http.get< Tache[]>(this.link);
    }

    getFakeTache(){
      return this.taches;
    }
  

       // Récupérer une tâche par son ID
  getTacheById(id: number): Observable<Tache> {
    return this.http.get<Tache>(`${this.link}/${id}`);
  }

  // Mettre à jour une tâche existante
  updateTache(task: Tache): Observable<Tache> {
    return this.http.patch<Tache>(`${this.link}/${task.id}`, task);
  }
    addTache(tache : Tache): Observable<any> {
      return this.http.post(this.link, tache);
    }
    deleteTache(taskId: number): Observable<void> {
      return this.http.delete<void>(`${this.link}/${taskId}`); // Suppression de la tâche via l'API

    }
    /*addSubTask(subTask: SubTask) : Observable<any> {
      return  this.http.post('http://localhost:3000/tache/subtasks', subTask);
    }*/
    /*addSubTask(subTask: SubTask): Observable<any> {
      return this.http.post('http://localhost:3000/tache/subtasks', subTask, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      });
    }*/
    addSubTask(subTask: SubTask): Observable<any> {
      return this.http.post('http://localhost:3000/tache/subtasks', subTask);
    }
    
    
   
    
  }
