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
          0,
          0
          
        ),
        new Skill(
          2,
          'Skill 2',
          'Description de la skill 2',
          0,
          0
          
        )
      ];
      
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

     // Récupérer toutes les compétences
  getAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.link);
  }
 // Mettre à jour le progrès d'une compétence
 /*updateProgress(skillId: number, niveauAct: number, progress: number): Observable<any> {
  return this.http.patch(`${this.link}/${skillId}`, {  niveauAct ,progress});
}
*/
updateProgress(skillId: number, niveauAct: number, progress: number): Observable<any> {
  // Incrémente le niveau si progress atteint 100%
  if (progress === 100) {
    niveauAct++; // Incrémenter le niveau actuel
  }

  // Envoyer les deux données: progress et niveauAct au backend
  return this.http.patch(`${this.link}/${skillId}`, { niveauAct, progress });
}



    
    
   
    
  }
