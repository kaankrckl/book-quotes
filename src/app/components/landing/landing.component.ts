import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';
import { UserService } from '../../services/user.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { User } from '../../models/user';
//
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  user = { } as User;
  warning: string = "";
  err: boolean = false;

  constructor(private router: Router, private quotes: QuotesService, private userServ: UserService) {
    this.user.un="";
    this.user.pw="";    
   }

  ngOnInit(): void {
    
  }

  loginUser(){
    console.log(this.err)
    if(!(this.user.un=="") && !((this.user.pw==""))){
      let postData = new FormData();

      for ( let key in this.user ) {
        postData.append(key, this.user[key]);
        console.log(this.user)
      }
  
      this.userServ.login(postData).subscribe( data => {
        console.log(data)
        if(data.success){
          localStorage.setItem('username', data.username);
          this.router.navigate(['/profile']);
        }
        else{
          console.log(data.error);
          this.warning=data.error;
          this.err = true;
        }
  
      })
    }
    else{
      this.warning="Please fill all the required information.";
      this.err=true;
    }
    

  }

}
