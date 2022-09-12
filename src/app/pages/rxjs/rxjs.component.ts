import { Component } from '@angular/core';
import { Observable  } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent  {

  constructor() {

    const obs$ = new Observable( observer =>{
      let i = -1;

      const intervalo = setInterval(()=>{
        i++;

        observer.next(i)

        if(i===2){
          observer.error('Error en obs')
        }


        if(i === 5){
          clearInterval(intervalo)
          observer.complete();
        }


      }, 1000);

    });

    obs$.pipe(
      retry(1)
    ).subscribe(
      valor => console.log('subcs:', valor),
      err => console.warn('erro', err),
      () => console.info('complete')
    );

  }



}
