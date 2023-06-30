import { Injectable } from '@angular/core';
import { ApiService } from '../ApiWork/Api.service';
import { IDataLogin } from 'src/app/interfaces/IDataLogin';
import { IRegistr } from 'src/app/interfaces/IRegistr';
@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(private ApiService: ApiService) {}
  AuthorizationStatus?: string = 'Guest';
   Admin: boolean = false
  Users$?: IRegistr[] = [];
  getDataUser(DataLoginstring: IDataLogin): void {
    this.ApiService.getAll<IRegistr[]>(
      'http://localhost:3000/Profil'
    ).subscribe((News) => {
      this.Users$ = News;
      this.examinationAuthorizationMail(DataLoginstring!, this.Users$);
    });
  }
  examinationAuthorizationMail(DataLogin: IDataLogin, DataApi: IRegistr[]):void {
    for (var i = 0; i < DataApi.length; i++) {
      if (DataApi[i].mail === DataLogin.mail) {
        this.examinationAuthorizationPasswor(DataLogin!, DataApi[i]);
        break;
      }
    }
  }
  examinationAuthorizationPasswor(DataLogin: IDataLogin, DataApi: IRegistr):void {
    if (DataApi.password === DataLogin.password) {
      this.AuthorizationStatus = DataApi.Status;
      console.log('его статус', this.AuthorizationStatus);
      localStorage.setItem('access', `${this.AuthorizationStatus}`)
    }
  }
  GetStatus(): boolean{
    if(localStorage.getItem("access") == "Admin"){
      return true
    } else{
      return false
    }
  }
}
