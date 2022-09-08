import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit  {
 ngOnInit() {
   this.btnClass = `btn ${ this.btnClass  }`
 }

 @Input('value') progress : number = 10;
 @Input() btnClass: string = 'btn-primary'

 @Output() valueEmit: EventEmitter<number> = new EventEmitter();


 changeValue(value: number) {

    if( this.progress >= 100 && value >= 0 ){
      this.valueEmit.emit(100);
       this.progress = 100;
    }

    if(this.progress <= 0 && value < 0){
      this.valueEmit.emit(0);
       this.progress = 0;
    }

    this.progress +=  value
    this.valueEmit.emit(this.progress)
 }

  onChange (newValue: number){

    if ( newValue >=100 ){
      this.progress = 100;
    }else if( newValue <= 0 ){
      this.progress = 0;
    }else{
      this.progress = newValue
    }

    this.valueEmit.emit(this.progress)

  }
}
