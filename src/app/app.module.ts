import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { HysComponent } from './components/hys/hys.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LogoComponent } from './components/logo/logo.component';
import { RrssComponent } from './components/rrss/rrss.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { EditExperienciaComponent } from './components/jobs/edit-experiencia.component';
import { NewExperienciaComponent } from './components/jobs/new-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    BannerComponent,
    EducacionComponent,
    FooterComponent,
    HysComponent,
    MenuComponent,
    ProyectsComponent,
    LogoComponent,
    RrssComponent,
    JobsComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    HttpClientModule

   
   ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
