import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaryClinicalComponent } from './components/diary-clinical/diary-clinical.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';

const routes: Routes = [

  { path: 'patient', component: PatientListComponent },
  { path: 'new_patient', component: NewPatientComponent },
  { path: '', component: DiaryClinicalComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
