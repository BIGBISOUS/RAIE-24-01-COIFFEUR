import { Component, OnInit } from '@angular/core';
import { Rdv } from '../models/Rdv';
import { RdvService } from '../services/rdv.service';

@Component({
  selector: 'app-rdv-list',
  templateUrl: './rdv-list.component.html',
  styleUrls: ['./rdv-list.component.css']
})
export class RdvListComponent implements OnInit {

  public rdvToUpdate: Rdv;
  public rdvs: any = [];
  rdvListColumns: string[] = ['nomClient', 'prenomClient', 'nomCoiffeur', 'dateRdv'];

  constructor(private rdvService: RdvService) {
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
}
