import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { RoleComponent } from './role/role.component';
import { AvisComponent } from './avis/avis.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PrestationComponent } from './prestation/prestation.component';
import { SalonComponent } from './salon/salon.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgSwitch } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    UtilisateurComponent,
    RoleComponent,
    AvisComponent,
    ReservationComponent,
    PrestationComponent,
    SalonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

