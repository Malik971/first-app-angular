import { Routes } from '@angular/router';
import { Basic } from './basic/basic';
import { UserForm } from './basic/user-form/user-form';
import { Welcome } from './welcome/welcome';

export const routes: Routes = [

  { path: "welcome", component: Welcome},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'},
  { path: 'basic', component: Basic},
  { path: 'user-form', component: UserForm}

];
