import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription  } from 'rxjs';
import { map, retry, take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() {

   /*  this.returnObserver().pipe(
      retry(1)
    ).subscribe(
      valor => console.log('subs:', valor),
      err => console.warn('erro', err),
      () => console.info('complete')
    ); */

     this.intervalSubs = this.returnIntervalo().subscribe( console.log );

  }
  ngOnDestroy(): void {
   this.intervalSubs.unsubscribe()
  }

  returnIntervalo():Observable<number>{

    return interval(500)
           .pipe(
            take(10),
            map( valor => valor +1 ),
            filter( valor => (valor % 2 === 0 ? true : false) )
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
