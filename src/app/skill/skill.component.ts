import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillService } from '../Skill.service';
import { Skill } from '../Skill';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [NavbarComponent, HttpClientModule, FormsModule, CommonModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skillInput: string = ''; 
  skills: any[] = []; // Liste des compétences récupérées du backend

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.loadSkills();
  }

  loadSkills(): void {
    this.skillService.getAllSkills().subscribe(
      (response: Skill[]) => {
        this.skills = response;
      },
      (error) => {
        console.error('Erreur lors du chargement des compétences :', error);
      }
    );
  }

  addSkill(): void {
    if (!this.skillInput.trim()) {
      alert('Veuillez entrer un titre valide pour la compétence.');
      return;
    }

    const newSkill = new Skill(0, this.skillInput, 'Nouvelle compétence ajoutée',0,0);
    this.skillService.addSkill(newSkill).subscribe(
      (response: Skill) => {
        console.log('Compétence ajoutée avec succès :', response);
        this.skills.push(response); // Mise à jour de la liste locale
        this.skillInput = ''; // Réinitialisation du champ d'entrée
      },
      (error) => {
        console.error("Erreur lors de l'ajout de la compétence :", error);
        alert("Erreur lors de l'ajout de la compétence.");
      }
    );
  }

  deleteSkill(skillId: number): void {
    this.skillService.deleteSkill(skillId).subscribe(
      () => {
        this.skills = this.skills.filter(skill => skill.id !== skillId); // Suppression locale
        console.log('Compétence supprimée avec succès.');
      },
      (error) => {
        console.error('Erreur lors de la suppression de la compétence :', error);
      }
    );
  }

  editSkill(skill: any) {
    // Marquer la compétence comme en cours d'édition
    skill.isEditing = true;
  }
  
  saveSkill(skill: any) {
    skill.isEditing = false;  // Désactive le mode édition après la sauvegarde
  
    // Mise à jour du backend
    this.skillService.updateSkill(skill).subscribe(
      (response) => {
        console.log('Compétence mise à jour avec succès :', response);
        alert('Compétence mise à jour.');
      },
      (error) => {
        console.error('Erreur lors de la mise à jour de la compétence :', error);
        alert('Erreur lors de la mise à jour de la compétence.');
      }
    );
  }
  increaseProgress(skill: Skill): void {
    if (skill.progress < 100) {
      const newProgress = Math.min(skill.progress + 10, 100); // Limite à 100%
      this.skillService.updateProgress(skill.id,skill.niveauAct, newProgress).subscribe(() => {
        skill.progress = newProgress; // Met à jour localement
      });
    }
    // Déclencher une fête si le progrès atteint 100%
    if (skill.progress == 100) {
      skill.niveauAct +=1;
      console.log('Le niveau est incrément :', skill.niveauAct);

      this.showCelebration();
    }
  }

  private showCelebration(): void {
    console.log('Félicitations ! Vous avez atteint 100 % de progression !');
  }
}
  



  



  

  

