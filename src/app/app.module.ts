import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { SqrtPipe } from './pipes/sqrt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    MyDirectiveDirective,
    SqrtPipe
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
