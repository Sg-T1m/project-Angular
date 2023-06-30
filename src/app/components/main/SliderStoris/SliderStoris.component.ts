import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, concatMap, delayWhen, from, interval, of, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-SliderStoris',
  templateUrl: './SliderStoris.component.html',
  styleUrls: ['./SliderStoris.component.css']
})
export class SliderStorisComponent implements OnInit {

  constructor() { }
  @Input() set items(value:string[]){
    this.items$.next(value);
  };
  ngOnInit() {
  }
items$ = new BehaviorSubject<string[]>([]);
paused$ =  new BehaviorSubject(false)
delay$ = this.paused$.pipe(switchMap(isPaused => timer(isPaused ? 30000 : 2000)))
item$ =interval().pipe(
  switchMap(()=> this.items$),
  switchMap(item => from(item)),
  concatMap(item => of(item).pipe(delayWhen(() => this.delay$))

) )
}
