import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {Observer} from "rxjs/index";
import {share} from "rxjs/internal/operators";

@Injectable()
export class TitleService {
  title:Observable<string>;
  titleObserver: Observer<string>
  constructor() {
    this.title = Observable.create((observer:Observer<string>)=>{
      this.titleObserver = observer
      this.titleObserver.next("Service")
    })// основная подписка для других комп
  }
}
// const titlePromise = new Promise(resolve=> {
//   setTimeout(() => {
//     this.title = "New Service"
//   }, 3000)
// })
// titlePromise.then((value:string)=>{
//   this.title = value;
// })
