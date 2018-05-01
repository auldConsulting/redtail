import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TemplatesComponent } from './templates/templates.component';
import { ClausesComponent } from './clauses/clauses.component';

const routes: Routes = [
  { path: '', redirectTo: '/templates', pathMatch: 'full' },
   { path: 'admin', component: AdminComponent },
   { path: 'templates', component: TemplatesComponent },
   { path: 'clauses', component: ClausesComponent },
 /* { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
