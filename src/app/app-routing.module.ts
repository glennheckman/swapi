import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes:Routes = [
  { path:'', redirectTo: '/characters', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:false})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
