import { Component, OnInit } from '@angular/core';
import { SidebarService } from './../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menutItems : any[];

  constructor(
    private sidebarService: SidebarService
  ) {
    this.menutItems = sidebarService.menu;
  }

  ngOnInit(): void {

  }

}
