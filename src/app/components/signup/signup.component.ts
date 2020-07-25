import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user = { } as User;
  warning: string = "";
  err: boolean = false;

  constructor(private router: Router, private register: RegisterService) {
    this.user.un="";
    this.user.pw=""; 
   }

  ngOnInit(): void {
  }

  registerUser(){
    
        if(!(this.user.un=="") || !((this.user.pw==""))){
          let postData = new FormData();
    
          for ( let key in this.user ) {
            postData.append(key, this.user[key]);
            console.log(this.user);
          }

          this.register.register(postData).subscribe( data => {
            if(data.success){
              this.router.navigate(['/']);
            }
            else{
              console.log(data.error)
              this.warning=data.error;
              this.err = true;
            }
          });
        }
        else{
          this.warning="Please fill all the required information.";
          this.err=true;
        }

        
      }

}
