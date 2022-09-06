import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path:'', redirectTo:'/admin', pathMatch:'full' },
  { path:'**', component: NotFoundComponent },
]

@NgModule({

  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
