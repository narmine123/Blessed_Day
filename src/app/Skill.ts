export class Skill{
    id: number;
    nom: string;
    objectif: string;
    niveauAct:number; 
    progress:number;

    constructor(id: number, nom: string,  objectif: string, niveauAct:number, progress:number) {
      this.id = id;
      this.nom = nom;
      this.objectif = objectif;
      this.niveauAct = niveauAct;
      this.progress = progress;
    }
  }
  