import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsers().then(user =>{
      console.log(user)
    })
   /*  const promise = new Promise( (resolve, reject)=>{

      if(false){
        resolve('Hola mundo')
      }else{
        reject('Algo salio mal')
      }

    });

    promise.then( (msg) =>{
      console.log(msg)
    }).catch(error => console.log(error))


    console.log('fin') */
  }

  getUsers(){

    const promise = new Promise(resolve =>{

      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then( body =>resolve(body.data) )
    })

    return promise

  }

}
