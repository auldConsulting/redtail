import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TemplatesComponent } from './templates/templates.component';
import { ClausesComponent } from './clauses/clauses.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { DummyDataService } from './dummy-data.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    TemplatesComponent,
    ClausesComponent,
    FooterBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DummyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
