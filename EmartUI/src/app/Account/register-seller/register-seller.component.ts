import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import {Seller} from 'src/app/Models/seller';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {

  RegisterForm1:FormGroup;
  submitted=false;
  lists:Seller[]=[];
  item:Seller;
  id:number;
  username:string;
  password:string;
  companyname:string;
  GSTIN:number;
  brief_about_company:string;
  postal_address:string;
  website:string;
  emailid:string;
  contact:number;

  constructor(private formbuilder:FormBuilder) { 

  }

  ngOnInit() {
    this.RegisterForm1=this.formbuilder.group({
      id:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]],
      username:['',[Validators.required,Validators.pattern('^[A-Z][0-9]$')]],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{7,10}[~`!@#$%^&*()-+=]$')]],
      companyname:['',[Validators.required,Validators.pattern('^[a-zA-Z]$')]],
      GSTIN:['',[Validators.required,Validators.pattern('^[0-9]$')]],
      brief_about_company:['',[Validators.required,Validators.pattern('^[a-zA-z]$')]],
      postal_address:['',[Validators.required,Validators.pattern('^[a-zA-Z][0-9]$')]],
      website:['',Validators.required],
      emailid:['',[Validators.required,Validators.email]],
      contact:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]]
  });

}
  onSubmit()
  {
    this.submitted=true;
    if(this.RegisterForm1.valid)
    {
      this.item=new Seller();
      this.item.id=this.RegisterForm1.value["id"];
      this.item.username=this.RegisterForm1.value["username"];
      this.item.password=this.RegisterForm1.value["password"];
      this.item.companyname=this.RegisterForm1.value["company name"];
      this.item.gstin=this.RegisterForm1.value["GSTIN"];
      this.item.briefaboutcompany=this.RegisterForm1.value["breif-about-company"];
      this.item.postal_address=this.RegisterForm1.value["postal address"];
      this.item.website=this.RegisterForm1.value["website"];
      this.item.emailid=this.RegisterForm1.value["emailid"];
      this.item.contactnumber=this.RegisterForm1.value["contact"];
      alert('Success!! :-)\n\n');
      console.log(JSON.stringify(this.RegisterForm1)) ;
      this.lists.push(this.item);
    }
  }
  get f() { return this.RegisterForm1.controls; }
onReset()
{
  this.submitted=false;
  this.RegisterForm1.reset();
}
}
