import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Rdv } from '../models/Rdv';

@Component({
  selector: 'app-rdv-form',
  templateUrl: './rdv-form.component.html',
  styleUrls: ['./rdv-form.component.css']
})
export class RdvFormComponent implements OnInit {

 // Titre de la page
 title = "Formulaire de création d'une règle";

 // Formulaire de création
 rdvForm: FormGroup;

 // Controller sur le formulaire pour actualiser les règles
 rdvControl = new FormControl();
  rdvService: any;

 // Constructeur
 constructor(private fb: FormBuilder) {
 }

 // Permet d'initialiser le formulaire de création d'une règle
 ngOnInit() {
   this.rdvForm = this.fb.group({  // Créé une instance de FormGroup
     nomClient: ['', Validators.required],
     prenomClient: ['', Validators.required],
     nomCoiffeur: ['', Validators.required],
     dateRdv: ['']
   });
 }

 // Traitement à l'envoi du formulaire depuis l'interface
 ngOnSubmit() {
   const rdv: Rdv = new Rdv(
     this.rdvForm.get('nomClient').value,
     this.rdvForm.get('prenomClient').value,
     this.rdvForm.get('nomCoiffeur').value,
     this.rdvForm.get('dateRdv').value,)
   this.rdvService.createRule(rdv).subscribe(_value => { console.log(_value) });
 }
}
