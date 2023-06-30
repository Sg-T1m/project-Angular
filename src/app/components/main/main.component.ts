import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IHistiry } from 'src/app/interfaces/IHidtory';
import { ApiService } from 'src/app/sevices/ApiWork/Api.service';
import { INews } from 'src/app/interfaces/INews';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  // News: INews[] = []; 
  News$?: Observable<INews[]>
  
  constructor(
    private ApiService: ApiService
  ) { }
    loading= false;

  ngOnInit() {
    this.loading= true;
    this. News$ = this.ApiService.getAll<INews[]>("http://localhost:3000/News").pipe(
      tap(()=> this.loading = false)
    )
    // this.NewsService.getAll().subscribe(News=>{
    //   this.News = News
    //   console.log(this.News)
    //   this.loading= false
    // })
   
  }
  historyContent: IHistiry[]= [{
    textTop: "Отдыхаю на природе",
    img: "./assets/Stori1.png",
    date: "21.09.2020"
  },
  {
    textTop: "Заканчиваю сложный проект",
    img: "./assets/Project.png",
    date: "15.09.2020"
  },
  {
    textTop: "Переехал в новую квартиру",
    img: "./assets/NewHome.png",
    date: "11.09.2020"
  },
  {
    textTop: "Осень пришла!",
    img: "./assets/autumn.png",
    date: "28.08.2020"
  }]
 
}
