import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  url:string="http://localhost/services/";

  constructor(private http: HttpClient) { 

  }

  //this is an alternative get request for twitter api because,
  // twitter is requiring a developer account to use the api.
  getTweets(): Observable<any>{
    return this.http.get(this.url+"gettweets.php");
  }

  postTweet(postData): Observable<any>{
    return this.http.post(this.url+"tweet.php", postData);
  }
}
