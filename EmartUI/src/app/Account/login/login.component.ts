import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { combineLatest } from 'rxjs';
import {Buyer} from 'src/app/Models/buyer';
import {Seller} from 'src/app/Models/seller';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  itemForm:FormGroup;
  username:string;
  password:string;
  errmsg:string;
  buyer:Buyer;
  seller:Seller;
  listb:Buyer[];
  listS:Seller[];
  constructor(private route:Router,private service:AccountService) { }

  ngOnInit() {

  }
  public validate()
  {
    if(this.username=="Admin" && this.password=="admin")
    {
      this.route.navigateByUrl('admin');
    }
    else
    {
      this.errmsg="Invalid Credentials";
    }
  }
}
