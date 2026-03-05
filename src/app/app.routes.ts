import { Routes } from '@angular/router';
import { Basic } from './basic/basic';
import { UserForm } from './basic/user-form/user-form';
import { Welcome } from './welcome/welcome';
import { NotFound } from './not-found/not-found';
import { UserListComponent } from './user-list-component/user-list-component';
import { Connexion } from './connexion/connexion';

export const routes: Routes = [

  { path: "welcome", component: Welcome},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'basic', component: Basic},
  { path: 'user-form', component: UserForm},
  { path: 'users/:id', component: UserListComponent},
  { path: 'connexion', component: Connexion},
  { path: '**', component: NotFound}

];
