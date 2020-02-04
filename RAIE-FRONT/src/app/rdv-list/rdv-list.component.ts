import { Component, OnInit } from '@angular/core';
import { Rdv } from '../models/Rdv';
import { RdvService } from '../services/rdv.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { WarningDialogComponent } from '../warning-dialog/warning-dialog.component';

@Component({
  selector: 'app-rdv-list',
  templateUrl: './rdv-list.component.html',
  styleUrls: ['./rdv-list.component.css']
})
export class RdvListComponent implements OnInit {

   // Titre de la page
  title = "Liste des rendez-vous";

  // Liste des rdv
  public rdvs: any = [];

  // Liste des colonnes de la tables
  rdvListColumns: string[] = ['nomClient', 'prenomClient', 'nomCoiffeur', 'dateRdv', 'deleteRdv'];

  /**
   * Constructeur du composant de liste des rdv
   * @param rdvService - Service des rdv
   * @param dialog - La fenêtre de dialogue
   */
  constructor(private rdvService: RdvService, public dialog: MatDialog) {
    this.rdvService.getAllRdv().subscribe(_rdv => {
      this.rdvs = _rdv;
    });
   }

  /**
    * Surcharge de la méthode ngOnInit
    */
  ngOnInit() {
  }

  /**
   * Permet de rafraîchir la liste des rdv
   */
  refresh() {
    this.rdvService.getAllRdv().subscribe(_rdv => {
      this.rdvs = _rdv;
    });
  }

  /**
   * Permet d'appeler une fenêtre de dialog pour demander une confirmation à l'utilisateur 
   * de la suppression d'un rendez-vous
   * @param rdv : Le rendez-vous sélectionné par l'utilisateur
   */
  deleteRdv(rdv: Rdv) {
    const dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      title: 'Avertissement',
      text: 'Êtes-vous sûr de supprimer ce rendez-vous ?'
    };
    const dialogRef = this.dialog.open(WarningDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'OK') {
          this.rdvService.deleteRdvById(rdv.idRdv).subscribe(_delete => {
            // _delete = objet que l'on supprime
          // ramener tous les rdv
          this.rdvService.getAllRdv().subscribe(_rdvs => {
            this.rdvs = _rdvs;
          });
        });
      }
    });
  }
}
