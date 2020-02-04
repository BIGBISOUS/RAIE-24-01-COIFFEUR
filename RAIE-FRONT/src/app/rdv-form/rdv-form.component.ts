import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rdv } from '../models/Rdv';
import { RdvService } from '../services/rdv.service';

@Component({
  selector: 'app-rdv-form',
  templateUrl: './rdv-form.component.html',
  styleUrls: ['./rdv-form.component.css']
})
export class RdvFormComponent implements OnInit {

 // Titre de la page
 title = "Formulaire de création d'un rdv";

 // Formulaire de création
 rdvForm: FormGroup;
 
 /**
  * Surcharge du constructeur
  * @param fb - Le formBuilder de la création d'un rdv
  * @param rdvService - Le service des rdv
  */
 constructor(private fb: FormBuilder, private rdvService: RdvService) {
 }

 /**
  * Surcharge de la méthode ngOnInit
  * Permet d'initialiser le formulaire de création d'un rdv
  */
 ngOnInit() {
   this.rdvForm = this.fb.group({  // Créé une instance de FormGroup
     nomClient: ['', Validators.required],
     prenomClient: ['', Validators.required],
     nomCoiffeur: ['', Validators.required],
     dateRdv: ['']
   });
 }

 /**
  * Surcharge de la méthode ngOnSubmit
  * Traitement à l'envoi du formulaire depuis l'interface
  */
 ngOnSubmit() {
   const rdv: Rdv = new Rdv(
     this.rdvForm.get('nomClient').value,
     this.rdvForm.get('prenomClient').value,
     this.rdvForm.get('nomCoiffeur').value,
     this.rdvForm.get('dateRdv').value,)
   this.rdvService.createRdv(rdv).subscribe(_value => { document.location.reload(true); });
 }
}
