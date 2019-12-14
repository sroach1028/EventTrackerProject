import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtinctionComponent } from './components/extinction/extinction.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'extinctions', component: ExtinctionComponent},
  {path : 'create', component: CreateComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
