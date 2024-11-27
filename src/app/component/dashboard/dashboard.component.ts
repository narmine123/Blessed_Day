import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Tache } from '../../Tache';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HttpClientModule,CommonModule ,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  taskInput: string = ''; // Titre de la tâche
  taches: any[] = []; // Liste des tâches

  constructor(private todoService: TodoService) {}
 
  addTache() {
    if (!this.taskInput.trim()) {
      alert('Veuillez entrer un titre valide pour la tâche.');
      return;
    }

    // Créer une nouvelle tâche en utilisant la classe Tache
    const newTache = new Tache(
      0,  // ID initialisé à 0, l'API devrait gérer l'ID
      this.taskInput,  // Le titre de la tâche
      '',  // Description vide au départ, à compléter si nécessaire
      new Date(),  // Date de création, définie à la date actuelle
      new Date(),  // Date de mise à jour, définie à la date actuelle
      new Date(),  // Date de fin par défaut, à compléter si nécessaire
      0,  // Priorité par défaut
      'Non commencée',  // Statut initial
      new Date(),  // Deadline par défaut, à compléter si nécessaire
      new Date(),  // Cycle time par défaut
      new Date(),  // Lead time par défaut
      '0%'  // Progrès initial
    );

    // Envoyer la nouvelle tâche au backend via le service
    this.todoService.addTache(newTache).subscribe(
      (response) => {
        console.log('Tâche ajoutée avec succès :', response);
        this.taches.push(response); // Ajouter la tâche retournée par le backend
        this.taskInput = ''; // Réinitialiser l'input
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la tâche :', error);
        alert('Erreur lors de l\'ajout de la tâche.');
      }
    );
}

  editTask(task: any) {
    // Fonction pour l'édition de la tâche
    console.log('Edit task:', task);
    // Logique d'édition (par exemple, ouvrir un modal avec le détail de la tâche à modifier)
  }

  deleteTask(taskId: number) {
    // Fonction pour la suppression de la tâche
    this.todoService.deleteTache(taskId).subscribe(
      () => {
        this.taches = this.taches.filter(t => t.id !== taskId); // Retirer la tâche de la liste après suppression
        console.log('Tâche supprimée avec succès');
      },
      (error) => {
        console.error('Erreur lors de la suppression de la tâche :', error);
        alert('Erreur lors de la suppression de la tâche.');
      }
    );
  }
}



  


  
