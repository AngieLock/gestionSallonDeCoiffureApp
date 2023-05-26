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

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    RoleComponent,
    AvisComponent,
    ReservationComponent,
    PrestationComponent,
    SalonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
