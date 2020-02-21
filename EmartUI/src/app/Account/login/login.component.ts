import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:string;
  password:string;
  errmsg:string;
  constructor(private route:Router) { }

  ngOnInit() {
  }
  public validate()
  {
    if(this.user=="Admin" && this.password=="admin")
    {
      this.route.navigateByUrl('admin');
    }
    else
    {
      this.errmsg="Invalid Credentials";
    }
  }
}
