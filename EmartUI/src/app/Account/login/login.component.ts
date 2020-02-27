import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { combineLatest } from 'rxjs';
import {Buyer} from 'src/app/Models/buyer';
import {Seller} from 'src/app/Models/seller';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  constructor(private route:Router,private service:AccountService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.itemForm=this.formBuilder.group({
      username:[''],
      password:['']
    });

  }
  public validate()
  {
    this.buyer=new Buyer();
    this.seller=new Seller();
    //this.buyer.username=this.itemForm.value["username"];
    //this.buyer.password=this.itemForm.value["password"];
    console.log(this.username);
    console.log(this.password);
    this.service.BuyerLogin(this.username,this.password).subscribe(res=>{
      this.buyer=res;
     if(this.buyer.username==this.username&&this.buyer.password==this.password){
        this.route.navigateByUrl('/buyer-landing-page');
      }
      console.log(this.buyer);
      console.log(this.buyer.username);
      console.log(this.buyer.password);
    })
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
