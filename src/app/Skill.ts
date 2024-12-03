export class Skill{
    id: number;
    nom: string;
    objectif: string;
    niveauAct:number; 
 

    constructor(id: number, nom: string,  objectif: string, niveauAct:number) {
      this.id = id;
      this.nom = nom;
      this.objectif = objectif;
      this.niveauAct = niveauAct;
    }
  }
  