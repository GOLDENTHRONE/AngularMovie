import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username="";
  password="";
  error="";
  login()
  {
    if(this.username.trim().length===0)
    {
        this.error="Username is required";
    }
    else if (this.password.trim().length===0){
      this.error="Password is required";
    }
    else{
      this.error="";
    }
  }
}
