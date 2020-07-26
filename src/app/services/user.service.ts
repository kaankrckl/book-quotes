import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string="http://localhost/services/";

  constructor(private http: HttpClient) {
    
   }

   login(postData): Observable<any>{
    //return this.http.post<any>(this.url,user);
    return this.http.post(this.url+"login.php", postData);
  }

  register(postData): Observable<any>{
    return this.http.post(this.url+"registration.php", postData);
  }
}
