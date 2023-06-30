import { INews } from 'src/app/interfaces/INews';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/sevices/ApiWork/Api.service';
@Component({
  selector: 'app-AdminMenu',
  templateUrl: './AdminMenu.component.html',
  styleUrls: ['./AdminMenu.component.css'],
})
export class AdminMenuComponent implements OnInit {
  constructor(
    private _ApiService:ApiService
  ) {
    this._CreateAdminForm()
    
  }
  AdminFormControl!: FormGroup;
  dataNews!: INews
  ngOnInit() {}
  private _CreateAdminForm() : void{
    this.AdminFormControl = new FormGroup({
      HeaderText: new FormControl(''),
      Text: new FormControl(''),
      date: new FormControl(''),
      subtitle: new FormControl(''),
      Action: new FormControl(''),
      imgs: new FormControl('')
    });
  }
  PutNews(): void{
  
    this.dataNews = {
      img: this.AdminFormControl.value.imgs,
      Header: this.AdminFormControl.value.HeaderText,
      Text: this.AdminFormControl.value.Text,
      date: this.AdminFormControl.value.imgs,
      Subject: this.AdminFormControl.value.subtitle,
      Action: this.AdminFormControl.value.Action,
      id: Math.random()
    }
    console.log(this.dataNews)
    this._ApiService.post(this.dataNews, "http://localhost:3000/News").subscribe(
      (data: any) => {
        this.AdminFormControl.value.clear;
        this._CreateAdminForm();
      }
    );
  }
}
// export interface INews{
//   img?: String,
//   Header?: string,
//   Text: string,
//   date: string,
//   Subject: string,
//   Action: string
//   }