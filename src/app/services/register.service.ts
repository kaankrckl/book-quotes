import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url:string="http://localhost/services/registration.php";

  constructor(private http: HttpClient) {
    
   }

   register(postData): Observable<any>{
    return this.http.post("http://localhost/services/registration.php", postData);
  }
}