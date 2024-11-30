import { Component, inject } from '@angular/core';
import { Skill } from '../model/skill';
import { SkillService } from '../services/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
  providers: [SkillService]
})
export class SkillComponent {
  skills: Skill[] =[];
  // le représentant du skill à ajouter
  skill = new Skill();
  skillService = inject(SkillService);
  constructor() {
    this.skills = this.skillService.getSkills();
  }
  addSkill() {
    this.skillService.addSkill(this.skill);
    this.skill = new Skill();
  }
  updateLevel(newLevel: number) {
    this.skill.level = newLevel;
  }
  deleteSkill(skill: Skill) {
    this.skillService.deleteSkill(skill);
  }
}
