import { Component, Input, OnInit } from '@angular/core';
import { IHistiry } from 'src/app/interfaces/IHidtory';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  constructor() {}
 
  ngOnInit() {
    console.log(`dvddd`);
  }
  @Input() stories?: IHistiry;

 
}
