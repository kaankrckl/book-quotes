import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  url:string="http://localhost/services/quotes.php";

  constructor(private http: HttpClient) {
    
   }

   getQuote(): Observable<any>{
    return this.http.get(this.url);
  }

}
