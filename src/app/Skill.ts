import { Time } from "@angular/common";

export class Skill{
    id: number;
    nom: string;
    objectif: string;
    niveauAct:number; 
    progress:number;
    cycleTime:string;
    LeadTime:string;
    DateIdee:Date;
    DateDebut: null |Date ;
    DateFin: Date | null;

    constructor(id: number, nom: string,  objectif: string, niveauAct:number, progress:number,cycleTime:string,
      LeadTime:string,
      DateIdee:Date,
     DateDebut:Date | null,
      DateFin:Date|null) {

      this.id = id;
      this.nom = nom;
      this.objectif = objectif;
      this.niveauAct = niveauAct;
      this.progress = progress;
      this.cycleTime = cycleTime;

      this.LeadTime= LeadTime;
      this.DateIdee= DateIdee;
      this.DateDebut=DateDebut ;
      this.DateFin= DateFin;
      
    }
  }
  