import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/Models/buyer';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {

  RegisterForm:FormGroup;
  submitted=false;
  lists:Buyer[]=[];
  item:Buyer;
  id:number;
  username:string;
  password:string;
  emailid:string;
  mobile:number; 
  /*createddatetime:Date;*/


  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
      this.RegisterForm=this.formbuilder.group({
      id:['',[Validators.required,Validators.pattern('^[0-9]{4}$')]],
      username:['',[Validators.required,Validators.pattern('^[A-Z][0-9]$')]],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]{7,10}[~`!@#$%^&*()-+=]$')]],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
    

    });
  }
  
  onSubmit()
  {
    this.submitted=true;
    if(this.RegisterForm.valid)
    {
      this.item=new Buyer();
      this.item.id=this.RegisterForm.value["id"];
      this.item.username=this.RegisterForm.value["username"];
      this.item.password=this.RegisterForm.value["password"];
      this.item.emailid=this.RegisterForm.value["emailid"];
      this.item.mobilenumber=this.RegisterForm.value["mobile"];
      alert('Success!! :-)\n\n');
      console.log(JSON.stringify(this.RegisterForm)) ;
      this.lists.push(this.item);
    }
  }
  get f() { return this.RegisterForm.controls; }
onReset()
{
  this.submitted=false;
  this.RegisterForm.reset();
}
}
