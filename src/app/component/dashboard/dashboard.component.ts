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
export class DashboardComponent  implements OnInit{
  taskInput: string = ''; // Titre de la tâche
  taches: any[] = []; // Liste des tâches

  constructor(private todoService: TodoService) {}
 
  ngOnInit(): void {
    this.loadTaches(); // Charger les tâches au démarrage du composant
  }

  // Méthode pour charger toutes les tâches
  loadTaches(): void {
    this.todoService.getTache().subscribe(
      (data) => {
        this.taches = data; // Assurez-vous que la réponse est un tableau de tâches
      },
      (error) => {
        console.error('Erreur lors du chargement des tâches', error);
        alert('Erreur lors du chargement des tâches.');
      }
    );
  }
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
  // Marquer la tâche comme en cours d'édition
  task.isEditing = true;
  
}
saveTask(task: any) {
  // Supprime le mode édition et envoie les modifications au backend
  task.isEditing = false;

  // Appel API pour mettre à jour la tâche sur le backend
  this.todoService.updateTache(task).subscribe(
    (response) => {
      console.log('Tâche mise à jour avec succès :', response);
      alert('La tâche a été mise à jour.');
    },
    (error) => {
      console.error('Erreur lors de la mise à jour de la tâche :', error);
      alert('Erreur lors de la mise à jour de la tâche.');
    }
  );
}



deleteTask(taskId: number): void {
  // Appeler le service pour supprimer la tâche avec l'ID donné
  this.todoService.deleteTache(taskId).subscribe(
    () => {
      // Supprimer la tâche de la liste locale après la suppression via l'API
      this.taches = this.taches.filter(task => task.id !== taskId);
      console.log("la tache est supprimée")
    },
    error => {
      console.error("Erreur lors de la suppression de la tâche", error);
    }
  );
}

}



  


  
