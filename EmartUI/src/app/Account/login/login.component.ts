import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/Services/account.service';
import { combineLatest } from 'rxjs';
import {Buyer} from 'src/app/Models/buyer';
import {Seller} from 'src/app/Models/seller';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { Token } from '@angular/compiler/src/ml_parser/lexer';
import {Token} from 'src/app/Models/token';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  itemForm:FormGroup;
  errmsg:string;
  buyer:Buyer;
  seller:Seller;
  role:string;
  submitted=false;
  token:Token;
  constructor(private route:Router,private service:AccountService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.itemForm=this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],
      role:['']
    });
  }
  get f() { return this.itemForm.controls; {}
}
  public validate()
  {
    this.submitted=true;
    if(this.itemForm.valid){
      this.buyer=new Buyer();
      this.seller=new Seller();
      this.token=new Token();
      let user=this.itemForm.value["username"];
      let pass=this.itemForm.value["password"];
      let role=this.itemForm.value["role"];
      if(role=="buyer"||role=="seller")
      {
         if(role=="buyer"){
          this.service.BuyerLogin(user,pass).subscribe(res=>{
            console.log(res);
            this.token=res;
            if(this.token.message=='success'){
              localStorage.setItem('buyerid',this.token.buyerid);
              console.log(this.token.uname);
              localStorage.setItem('username',this.token.uname);
              this.route.navigateByUrl('/buyer-landing-page');
            }
            else{
              alert('Invalid Credentials')
            }
          })
        }
        else if(role=="seller"){
          this.service.SellerLogin(user,pass).subscribe(res=>{
            console.log(res);
            this.token=res;
            if(this.token.message=='success'){
              localStorage.setItem('sellerid',this.token.sellerid);
              localStorage.setItem('username',this.token.uname);
            this.route.navigateByUrl('/seller-landing-page');
          }
          else{
            alert('Invalid Credentials');
          }
          })
        }
      }
      else{
        if(user=="Admin" && pass=="admin")
        {
          localStorage.setItem('admin','admin');
          this.route.navigateByUrl('admin');
        }
        else{
          alert('Invalid Credentials');
        }
      }
    }
  }
}
 //    this.buyer=res;
    //   console.log(this.buyer);
    //  if(this.buyer.username==user&&this.buyer.password==pass){
    //     this.route.navigateByUrl('/buyer-landing-page');
    //   }
    //   else{
    //     alert('Invalid Credentials');
    //   }
      // console.log(this.buyer);
      // console.log(this.buyer.username);
      // console.log(this.buyer.password);
    //   this.seller=res;
    //  if(this.seller.username==user&&this.seller.password==pass){
    //     this.route.navigateByUrl('/seller-landing-page');
    //   }
    //   else{
    //     alert('Invalid Credentials');
    //   }
    //   console.log(this.seller);
    //   console.log(this.seller.username);
    //   console.log(this.seller.password);
    // console.log(this.role);
    // switch(this.role){
    //   case "buyer":
    //     this.route.navigateByUrl('/buyer-landing-page');
    //     break;
    //     case "seller":
    //     this.route.navigateByUrl('/seller-landing-page');
    //     break;
    //     case "admin":
    //     this.route.navigateByUrl('admin');
    //     break;
    //     default:
    //       alert("invalid credentials");
    // }