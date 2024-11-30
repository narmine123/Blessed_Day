import { Injectable } from '@angular/core';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  skills: Skill[] = [];

  // retourner la liste des Skills
  getSkills(): Skill[] {
    return this.skills;
  }

  // ajouter skill
  addSkill(skill: Skill): void {
    this.skills.push(skill);
  }

  // retourner true si l'élément est supprimé, false sinon
  deleteSkill(skill: Skill): boolean {
    const index = this.skills.indexOf(skill);
    if (index !== -1) {
      this.skills.splice(index, 1);
      return true ;
    }
    return false;
  }
}
