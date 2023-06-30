import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthorizationService } from 'src/app/sevices/Authorization/Authorization.service';
@Component({
  selector: 'app-navigationLeft',
  templateUrl: './navigationLeft.component.html',
  styleUrls: ['./navigationLeft.component.css']
})
export class NavigationLeftComponent implements OnInit, OnChanges {

  constructor(
   public AuthorizationService:AuthorizationService
  ) { }
  ngOnInit() {
    console.log(this.AuthorizationService.AuthorizationStatus, "это статус уебана при загрузке поебени")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.AuthorizationService.AuthorizationStatus, "это статус уебана")
  }

 

}
