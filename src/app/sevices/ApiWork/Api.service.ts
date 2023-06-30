import { IRegistr } from '../../interfaces/IRegistr';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, delay, Observable, throwError } from 'rxjs';
import { INews } from 'src/app/interfaces/INews';
import { ErrorService } from '../error-service/error.service';
import { IDataLogin } from 'src/app/interfaces/IDataLogin';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  static post(data: IRegistr) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private _ErrorService:ErrorService,
    private http: HttpClient
    ) {}
  getAll<T>(url:string): Observable<T> {
    return this.http
      .get<T>(`${url}`, {
        params: new HttpParams(),
      })
      .pipe(
        delay(1000),
        catchError(this._errorHandler.bind(this)));
  }
//http://localhost:3000/News
  private _errorHandler(error: HttpErrorResponse) {
    this._ErrorService.handler(error.message)
    return throwError(() => error.message);
  }
  post<T>(data: T, url: string): Observable<T> {
  
    return this.http.post<T>(`${url}`, data)
  }

// http://localhost:3000/Profil
}

// Names: string,
// mail: string,
// password: string,
// passwordConfirmation?: string
