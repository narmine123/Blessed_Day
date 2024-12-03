import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Skill } from './Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
 
  link = 'http://localhost:3000/skill';
  private skill: Skill[];

    constructor(private http: HttpClient) {
      this.skill = [
        new Skill(
          1,
          'Skill 1',
          'Description de la skill 1',
          0
          
        ),
        new Skill(
          2,
          'Skill 2',
          'Description de la skill 2',
          1
          
        )
      ];
      
    }
    getSkill():Observable< Skill[]>{
      return this.http.get< Skill[]>(this.link);
    }

    getFakeTache(){
      return this.skill;
    }
  

       // Récupérer une tâche par son ID
  getSkillById(id: number): Observable<Skill> {
    return this.http.get<Skill>(`${this.link}/${id}`);
  }

  // Mettre à jour une tâche existante
  updateSkill(skill: Skill): Observable<Skill> {
    return this.http.patch<Skill>(`${this.link}/${skill.id}`, skill);
  }
  addSkill(skill: Skill): Observable<any> {
      return this.http.post(this.link, skill);
    }
  deleteSkill(skillId: number): Observable<void> {
      return this.http.delete<void>(`${this.link}/${skillId}`); // Suppression de skill via l'API

    }
  
   
    
    
   
    
  }
