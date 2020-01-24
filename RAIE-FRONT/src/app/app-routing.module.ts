import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RdvFormComponent } from './rdv-form/rdv-form.component';


const routes: Routes = [{
 path: 'PriseDeRendezVous', component: RdvFormComponent,
 }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
