import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu : any[] = [
    {
      title: 'Dashboard!!',
      icon: 'mdi mdi-gauge',
      submenu:[
        { title: 'Principal', path: '/' },
        { title: 'Progress', path: 'progress' },
        { title: 'Grafica', path: 'grafica1' },
      ]
    }
  ]


  constructor() { }
}
