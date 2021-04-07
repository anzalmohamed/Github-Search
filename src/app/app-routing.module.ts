import { ReposComponent } from './components/repos/repos.component';
import { UsersComponent } from './components/users/users.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',redirectTo: 'users', pathMatch:'full'},
  {path: 'repositories', component: ReposComponent},
  {path: 'users', component:UsersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
