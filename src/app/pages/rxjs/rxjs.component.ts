import { Component } from '@angular/core';
import { Observable, interval  } from 'rxjs';
import { map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent  {

  constructor() {

   /*  this.returnObserver().pipe(
      retry(1)
    ).subscribe(
      valor => console.log('subs:', valor),
      err => console.warn('erro', err),
      () => console.info('complete')
    ); */

      this.returnIntervalo().subscribe( console.log );

  }

  returnIntervalo():Observable<number>{

    return interval(1000)
           .pipe(
            take(4),
            map( valor => valor +1 )
           )

  }

  returnObserver():Observable<number>{
    let i = -1;

    const obs$ = new Observable<number>( observer =>{

      const intervalo = setInterval(()=>{
        i++;

        observer.next(i)

        if(i === 2){
          observer.error('Error en obs')
        }


        if(i === 5){
          clearInterval(intervalo)
          console.log('5 valor')
          observer.complete();
        }
        if(i === 6){
          clearInterval(intervalo)
          console.log('6 valor')
          observer.complete();
        }


      }, 1000);

    });

    return obs$;

  }

}
