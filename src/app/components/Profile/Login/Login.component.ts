import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { IDataLogin } from 'src/app/interfaces/IDataLogin';
import { ApiService } from 'src/app/sevices/ApiWork/Api.service';
import { AuthorizationService } from 'src/app/sevices/Authorization/Authorization.service';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css'],
})
export class LoginComponent implements OnInit {
  formConrolLogin!: FormGroup;
  constructor(
    private ApiService: ApiService,
    private AuthorizationService: AuthorizationService
  ) {
    this._createForm();
  }
  Users$?: IDataLogin[] = [];
  DataLoginstring?: IDataLogin;
  //  Observable<IDataLogin[]>
  ngOnInit(): void {}

  private _createForm(): void {
    this.formConrolLogin = new FormGroup({
      mail: new FormControl(null),
      password: new FormControl(null),
    });
  }
  authorization(): void {
    console.log(this.formConrolLogin?.value);
    this.DataLoginstring = {
      mail: this.formConrolLogin.value.mail,
      password: this.formConrolLogin.value.password,
    };
    this.AuthorizationService.getDataUser(this.DataLoginstring);
  }
}
