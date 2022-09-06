import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
      {  path:'dashboard',  component: DashboardComponent },
      {  path: 'progress', component: ProgressComponent  },
      {  path:'grafica1', component: Grafica1Component  },
      { path:'', redirectTo:'/dashboard', pathMatch:'full' },

    ]
  },

  {  path:'login', component: LoginComponent },
  {  path:'register', component: RegisterComponent },

  { path:'**', component: NotFoundComponent }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
