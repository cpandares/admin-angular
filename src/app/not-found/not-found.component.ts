import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: [
    './404.component.css'
  ]
})
export class NotFoundComponent  {

  constructor() { }


  year = new Date().getFullYear()

}
