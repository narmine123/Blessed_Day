export class SubTask {
    id: number;
    title: string;
    taskId: number; // Référence à la tâche à laquelle cette sous-tâche appartient
  
    constructor(id: number, title: string,  taskId: number) {
      this.id = id;
      this.title = title;
      this.taskId = taskId;
    }
  }
  