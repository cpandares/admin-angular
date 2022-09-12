import { RxjsComponent } from './rxjs/rxjs.component';
import { PromisesComponent } from './promises/promises.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { Routes, RouterModule }from '@angular/router';
import { NgModule } from '@angular/core';


import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';



const routes: Routes = [
  {
    path: 'admin',
    component: PagesComponent,
    children:[
      {  path:'',  component: DashboardComponent, data:{ title: 'Dashboard' } },
      {  path: 'progress', component: ProgressComponent , data:{ title: 'Progress' } },
      {  path:'grafica1', component: Grafica1Component, data:{ title: 'Graphic #1' }  },
      {  path:'account-settings', component: AccountSettingsComponent, data:{ title: 'Theme Settings' }  },
      {  path:'promises', component: PromisesComponent, data:{ title: 'Promises' }  },
      {  path:'rxjs', component: RxjsComponent, data:{ title: 'Rxjs' }  },
    ]
  },
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})


export class PagesRoutingModule {}


