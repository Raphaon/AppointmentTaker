import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { ServicesComponent } from './services/services.component';
import { HealthStructureComponent } from './health-structure/health-structure.component';
import { PrescribersComponent } from './prescribers/prescribers.component';
import { FormsModule } from '@angular/forms';
import { ServiceComponent } from './service/service.component';
import { RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { PatientsComponent } from './patients/patients.component';
import { TakeAppointmentComponent } from './take-appointment/take-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ServicesComponent,
    HealthStructureComponent,
    PrescribersComponent,
    ServiceComponent,
    PatientComponent,
    SchedulesComponent,
    AppointmentsComponent,
    SpecialityComponent,
    PatientsComponent,
    TakeAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
