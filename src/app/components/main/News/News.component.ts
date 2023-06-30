import { Component, Input, OnInit } from '@angular/core';
import { INews } from 'src/app/interfaces/INews';
@Component({
  selector: 'app-News',
  templateUrl: './News.component.html',
  styleUrls: ['./News.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() NewsContent?:INews
}
