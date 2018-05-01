import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TemplatesComponent } from './templates/templates.component';
import { ClausesComponent } from './clauses/clauses.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TemplatesComponent,
    ClausesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
