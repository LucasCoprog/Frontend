import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewExperienciaComponent } from './components/jobs/new-experiencia.component';
import { EditExperienciaComponent } from './components/jobs/edit-experiencia.component';
import { LoginComponent } from './components/login/login.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }