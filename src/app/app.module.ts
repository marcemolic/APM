import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DiaryClinicalComponent } from './components/diary-clinical/diary-clinical.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { HeaderComponent } from './components/header/header.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DiaryClinicalComponent,
    PatientListComponent,
    HeaderComponent,
    NewPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
