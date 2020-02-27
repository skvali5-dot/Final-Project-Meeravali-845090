import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import {Seller} from 'src/app/Models/seller';
import { combineLatest } from 'rxjs';
import { SellerService } from 'src/app/Services/seller.service';

@Component({
  selector: 'app-seller-profile',
  templateUrl: './seller-profile.component.html',
  styleUrls: ['./seller-profile.component.css']
})
export class SellerProfileComponent implements OnInit {

  RegisterForm6:FormGroup;
  submitted=false;
  lists:Seller[];
  seller:Seller;
  constructor(private formbuilder:FormBuilder,private service:SellerService) { 
  }

  ngOnInit() {
  this.RegisterForm6=this.formbuilder.group({
    id:[''],
    username:[''],
    password:[''],
    companyname:[''],
    gstin:[''],
    briefaboutcompany:[''],
    postaladdress:[''],
    website:[''],
    emailid:[''],
    contactnumber:['']
  });
this.Search()
}
Search()
  {
    this.submitted=true;
    //  let id1=this.RegisterForm6.value["id"];
      this.service.ViewProfile("S001").subscribe(res=>{
        this.seller=res;
        console.log(this.seller);
        this.RegisterForm6.setValue({
          id:this.seller.id,
          username:this.seller.username,
          password:this.seller.password,
          companyname:this.seller.companyname,
          gstin:this.seller.gstin,
          briefaboutcompany:this.seller.briefaboutcompany,
          postaladdress:this.seller.postalAddress,
          website:this.seller.website,
          emailid:this.seller.emailid,
          contactnumber:this.seller.contactnumber
        });
      })
  }
  get f() { return this.RegisterForm6.controls; }
  Update()
  {
    this.seller=new Seller();
      this.seller.id=this.RegisterForm6.value["id"];
      this.seller.username=this.RegisterForm6.value["username"];
      this.seller.password=this.RegisterForm6.value["password"];
      this.seller.companyname=this.RegisterForm6.value["companyname"];
      this.seller.gstin=this.RegisterForm6.value["gstin"];
      this.seller.briefaboutcompany=this.RegisterForm6.value["briefaboutcompany"];
      this.seller.postalAddress=this.RegisterForm6.value["postaladdress"];
      this.seller.website=this.RegisterForm6.value["website"];
      this.seller.emailid=this.RegisterForm6.value["emailid"];
      this.seller.contactnumber=this.RegisterForm6.value["contactnumber"];   
      console.log(this.seller);
      this.service.Update(this.seller).subscribe(res=>{
         console.log('Record Updated');
      },err=>{
        console.log(err);
      })
  }
}

