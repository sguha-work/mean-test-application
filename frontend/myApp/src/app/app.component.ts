import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private myObservable: Observable<any>;
  private mySubscription1: any;
  private mySubscription2: any;
  constructor() {
    this.myObservable = new Observable((subscriber) => {
      console.log('observable called');
      window.setTimeout(() => {
        subscriber.next(1);
      }, 1000);
      window.setTimeout(() => {
        subscriber.next(2);
      }, 2000);
      window.setTimeout(() => {
        subscriber.next(3);
      }, 3000);
      window.setTimeout(() => {
        subscriber.next(4);
      }, 4000);
      window.setTimeout(() => {
        subscriber.next(5);
      }, 5000);
      window.setTimeout(() => {
        subscriber.complete();
      }, 5000);
    });
  }
  ngOnDestroy(): void {
    this.mySubscription1.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.mySubscription1 = this.myObservable.subscribe({next: (value)=>{
      console.log(value);
    }, error:(error)=>{
      console.log(error)
    }, complete: ()=>{
      console.log('subscription complete');
    }});
  }
  ngOnInit(): void {
    this.myObservable.subscribe((value) => {
      console.log(value);
    });
  }
  
  title = 'myApp';

}
