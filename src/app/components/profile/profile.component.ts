import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';
import { Quote } from '../../models/quote';
import { TweetService } from '../../services/tweet.service';
import { Router } from '@angular/router';
import { Tweet } from '../../models/tweet';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  default: string = "Bring a quote here...";
  quote = {} as Quote;
  totalRecords: Number;
  tweetsList: any;
  quoteList = []; 
  page:Number = 1;
  username: string;
  str: string;
  strLen: Number;
  buttonClicked: boolean = false;
  status: string="";
  tweet = { } as Tweet;
  filtered: any;
  search: string ="";

  constructor(private router: Router, private tweets: TweetService, private quotes: QuotesService) { 
    this.username = localStorage.getItem('username');
    this.search= 'Shared by "'+ this.username+'"';
    this.strLen = this.search.length;
    console.log(this.strLen);

    //get users tweets
    this.getPosts();
    //




  }

  ngOnInit(): void {
  }

 //Check length of quote, source and Shared by username if total is <280 bring quote
  bringQuote(){
    
    this.quotes.getQuote().subscribe(data =>{ 
      if(data.quote.length + data.source.length+ this.strLen<280){
        console.log(data.quote.length + data.source.length+ this.strLen);
        this.quote= data, console.log();
        this.default = "";
      }
      else{
        return this.bringQuote();
      }
    }, error=> console.log(error))
  }

 
  tweetQuote(){

    if(this.quote.quote != undefined){

      //define the tweet text
      this.status=this.quote.quote+"\n"+this.quote.source+"\n"+"Shared by \""+ this.username+"\""
      console.log(this.status);
    
      //I wrote this part to display the send tweet functionality. Because I couldnt get a twitter developer account.
      this.quoteList.unshift({
        "title": this.status,
      })

      let postData = new FormData();
      this.tweet.title = this.status;

      for ( let key in this.tweet ) {
        postData.append(key, this.tweet[key]);
        console.log(this.tweet);
      }

      /*post book quote as tweet
      this.tweets.postTweet(postData).subscribe(data =>{
        console.log(data)
        
        //Fetch users tweets again, to see the last tweet posted by this user.
        bu condition çalışırsa
        
        this.getPosts();
        
        
      }, error =>console.log(error))
      */ 
      this.buttonClicked = true;
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

  getPosts(){
    /*
    //make the request to gettweets.php file
    this.tweets.getTweets().subscribe(data => {
      this.tweetsList=data
      this.tweetsList.forEach(function (value) {
        console.log(value.text);
      });

      //filter the tweets based on currently logged in username
       this.filtered=this.tweetsList.filter((item)=>{
        return item.text.includes(this.search); 
      });
      //and finally to display the filtered array we must write 'filtered' instead of 'quoteList' in hmtl file.
      //since we cant do that we are using quoteList as dummy data

      console.log(this.filtered);
    });
    */
  }

}


