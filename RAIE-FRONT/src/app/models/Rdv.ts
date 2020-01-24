export class Rdv {
    idRdv: number;
    nomClient: string;
    prenomClient: string;
    nomCoiffeur: string;
    dateRdv: Date;

    constructor(nomClient: string, prenomClient: string, nomCoiffeur: string, dateRdv: Date, idRdv?: number){
            this.idRdv = idRdv;
            this.nomClient = nomClient;
            this.prenomClient = prenomClient;
            this.nomCoiffeur = nomCoiffeur;
            this.dateRdv = dateRdv;
    }
}
