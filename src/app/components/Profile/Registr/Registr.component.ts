import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IRegistr } from 'src/app/interfaces/IRegistr';
import { ApiService } from 'src/app/sevices/ApiWork/Api.service';
@Component({
  selector: 'app-Registr',
  templateUrl: './Registr.component.html',
  styleUrls: ['./Registr.component.css'],
})
export class RegistrComponent implements OnInit {
  constructor(private ApiService: ApiService) {
    this._createForm();
  }
  buyTicketForm!: FormGroup;
  ngOnInit() {}
  detali = false;
  loginForm: IRegistr = {
    Names: '',
    mail: '',
    password: '',
    passwordConfirmation: '',
  };
  valueError = false;
  pringForm() {
    if (
      this.buyTicketForm.controls['Names'].valid &&
      this.buyTicketForm.controls['mail'].valid &&
      this.buyTicketForm.controls['password'].valid &&
      this.buyTicketForm.value.password ==
        this.buyTicketForm.value.passwordConfirmation
    ) {
      var User: IRegistr = {
        Names: this.buyTicketForm.value.Names,
        mail: this.buyTicketForm.value.mail,
        password: this.buyTicketForm.value.password,
        Status: 'User',
      };
      this.ApiService.post(User, 'http://localhost:3000/Profil').subscribe(
        (data: any) => {
          this.valueError = false;
          this.buyTicketForm.value.clear;
          this._createForm();
        }
      );
    } else {
      this.valueError = true;
    }
  }
  private _createForm() {
    this.buyTicketForm = new FormGroup({
      Names: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      mail: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      passwordConfirmation: new FormControl<string>('', [Validators.required]),
    });
  }
}
