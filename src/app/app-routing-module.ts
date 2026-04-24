import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User } from './user/user';
import { Dashboard } from './dashboard/dashboard';

const routes: Routes = [
  {path: '', component: Dashboard},
  {path: 'dashboard', component: Dashboard},
  {path: 'user', component: User}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
