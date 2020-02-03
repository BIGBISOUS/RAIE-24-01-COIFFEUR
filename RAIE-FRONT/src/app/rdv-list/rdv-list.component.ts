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

  public rdvToUpdate: Rdv;
  public rdvs: any = [];
  rdvListColumns: string[] = ['nomClient', 'prenomClient', 'nomCoiffeur', 'dateRdv', 'deleteRdv'];

  constructor(private rdvService: RdvService, public dialog: MatDialog) {
    this.rdvService.getAllRdv().subscribe(_rdv => {
      this.rdvs = _rdv;
    });
   }

  ngOnInit() {
  }

  refresh() {
    this.rdvService.getAllRdv().subscribe(_rdv => {
      this.rdvs = _rdv;
    });
  }

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
        console.log(rdv);
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
