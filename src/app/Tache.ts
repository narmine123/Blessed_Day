import { SubTask } from "./SubTask";

export class Tache {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    date_fin: Date;
    priorité: number;
    statut: string;
    deadline: Date;
    cycleTime: Date;
    leadTime: Date;
    progrès: string;
    subtasks: SubTask[] = []; // Initialisation avec un tableau vide


    constructor(
        id = 0,
        title = '',
        description = '',
        createdAt = new Date(),
        updatedAt = new Date(),
        date_fin = new Date(),
        priorité = 0,
        statut = '',
        deadline = new Date(),
        cycleTime = new Date(),
        leadTime = new Date(),
        progrès = '',
        subtasks: SubTask[] = []
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.date_fin = date_fin;
        this.priorité = priorité;
        this.statut = statut;
        this.deadline = deadline;
        this.cycleTime = cycleTime;
        this.leadTime = leadTime;
        this.progrès = progrès;
        this.subtasks = subtasks;
    }
}
