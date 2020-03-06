import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import {Seller} from 'src/app/Models/seller';
import { AccountService } from 'src/app/Services/account.service';
import { combineLatest } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {

  RegisterForm1:FormGroup;
  submitted=false;
  lists:Seller[];
  seller:Seller;
  constructor(private formbuilder:FormBuilder,private service:AccountService,private route:Router) { 
  }

  ngOnInit() {
    
   /* this.RegisterForm1=this.formbuilder.group({
      id:['',[Validators.required,Validators.pattern('^[A-Za-z0-9]{4}$')]],
      username:['',[Validators.required,Validators.pattern('^[a-z0-9A-Z]{2,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]$')]],
      companyname:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,20}$')]],
      GSTIN:['',[Validators.required,Validators.pattern('^[a-zA-Z]{2,10}$')]],
      briefaboutcompany:['',[Validators.required,Validators.pattern('^[a-zA-z]{2,150}$')]],
      postal_address:['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
      website:[''],
      emailid:['',[Validators.required,Validators.email]],
      contactnumber:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]]
  });*/
  this.RegisterForm1=this.formbuilder.group({
    username:['',[Validators.required,Validators.pattern('^[a-z0-9A-Z@_]{2,30}$')]],
    password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9~`!@#$%^&*()-+=]{6,15}$')]],
    companyname:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,20}$')]],
    GSTIN:['',[Validators.required,Validators.pattern('^[a-zA-Z]{2,10}$')]],
    briefaboutcompany:['',[Validators.required,Validators.pattern('^[a-zA-z0-9]{2,150}$')]],
    postaladdress:['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
    website:['',[Validators.required]],
    emailid:['',[Validators.required,Validators.email]],
    contactnumber:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]]
  });

}
  onSubmit()
  {
    this.submitted=true;
    if(this.RegisterForm1.valid)
    {
      this.seller=new Seller();
      this.seller.id='S'+Math.round(Math.random()*999);
      this.seller.username=this.RegisterForm1.value["username"];
      this.seller.password=this.RegisterForm1.value["password"];
      this.seller.companyname=this.RegisterForm1.value["companyname"];
      this.seller.gstin=this.RegisterForm1.value["GSTIN"];
      this.seller.briefaboutcompany=this.RegisterForm1.value["briefaboutcompany"];
      this.seller.postalAddress=this.RegisterForm1.value["postaladdress"];
      this.seller.website=this.RegisterForm1.value["website"];
      this.seller.emailid=this.RegisterForm1.value["emailid"];
      this.seller.contactnumber=this.RegisterForm1.value["contactnumber"];   
      console.log(this.seller);
      alert('Registration Successfull');
      this.service.SellerSignUp(this.seller).subscribe(res=>{
         this.seller=res;
         console.log(this.seller);
      },err=>{
        console.log(err);
      })
    }
  }
  get f() { return this.RegisterForm1.controls; }
onReset()
{
  this.submitted=false;
  this.RegisterForm1.reset();
}
}
