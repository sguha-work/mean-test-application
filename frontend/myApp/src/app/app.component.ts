import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private myObservable: Observable<any>;
  constructor() {
    this.myObservable = new Observable((subscriber)=>{
      console.log('observable called');
      window.setTimeout(()=>{
        subscriber.next(1);
      },1000);
      window.setTimeout(()=>{
        subscriber.next(2);
      },2000);
      window.setTimeout(()=>{
        subscriber.next(3);
      },3000);
      window.setTimeout(()=>{
        subscriber.next(4);
      },4000);
      window.setTimeout(()=>{
        subscriber.next(5);
      },5000);
    });
  }
  ngOnInit(): void {
    this.myObservable.subscribe((value)=>{
      console.log(value);
    });
  }
  title = 'myApp';
  
}
