import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/sevices/error-service/error.service';
@Component({
  selector: 'app-global-Error',
  templateUrl: './global-Error.component.html',
  styleUrls: ['./global-Error.component.css']
})
export class GlobalErrorComponent implements OnInit {

  constructor(
    public ErrorService:ErrorService
  ) { }
    $erorrClose?:Observable<any> = new Observable((sub) => {
      setTimeout(()=>{
        sub.next( this.ErrorService.clear())
      }, 10000)
    })
 
   
  ngOnInit() {
    this.$erorrClose?.subscribe()
  }

}
