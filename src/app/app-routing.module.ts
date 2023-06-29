import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { PrescribersComponent } from './prescribers/prescribers.component';
import { HealthStructureComponent } from './health-structure/health-structure.component';
import { HomeComponent } from './home/home.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { TakeAppointmentComponent } from './take-appointment/take-appointment.component';

const routes: Routes = [
  {
    path: "services",
    component: ServicesComponent
},

{
  path:'healthStructures', 
  component:HealthStructureComponent
},

{
  path:'home', 
  component:HomeComponent
},

{
  path: 'prescribers',
  component:PrescribersComponent
},

{
  path: 'healthStructure/:id/services',
  component:ServicesComponent
},

{
  path:'appointments',
  component:AppointmentsComponent
},

{
  path:'takeAppointment', 
  component: TakeAppointmentComponent
},

{
  path:'', 
  redirectTo : 'home',
   pathMatch: 'full',
},


{
  path: '**',
  redirectTo : 'home',
  pathMatch: "full"

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
