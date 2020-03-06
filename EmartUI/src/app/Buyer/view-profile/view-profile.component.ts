import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/Models/buyer';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { combineLatest } from 'rxjs';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
    RegisterForm:FormGroup;
    submitted=false;
    buyer:Buyer;
  constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) { }
  ngOnInit() {
    this.RegisterForm=this.formbuilder.group({
      id:[''],
      username:['',[Validators.required,Validators.pattern('^[A-Za-z0-9]{2,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9~`!@#$%^&*()-+=]{6,15}$')]],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
      createddatetime:['']
    });
    this.Search();
  }
  onSubmit()
  {
    this.submitted=true;
    if(this.RegisterForm.valid)
    {
      this.buyer=new Buyer();
      this.buyer.id=localStorage.getItem('buyerid');
      this.buyer.username=this.RegisterForm.value["username"];
      this.buyer.password=this.RegisterForm.value["password"];
      this.buyer.emailid=this.RegisterForm.value["emailid"];
      this.buyer.mobilenumber=this.RegisterForm.value["mobile"];
      this.buyer.createddatetime=this.RegisterForm.value["createddatetime"];
      console.log(this.buyer); 
      this.service.Update(this.buyer).subscribe(res=>{
        alert('Your Details Are Updated');
      },err=>{
        console.log(err);
      })
    }
  }
  Search()
  {
    let id=localStorage.getItem('buyerid');
    this.service.ViewProfile(id).subscribe(res=>{
      this.buyer=res;
      console.log(this.buyer)
      this.RegisterForm.setValue({
        id:this.buyer.id,
        username:this.buyer.username,
        password:this.buyer.password,
        emailid:this.buyer.emailid,
        mobile:this.buyer.mobilenumber,
        createddatetime:this.buyer.createddatetime
      })
    })
  }
  get f() { return this.RegisterForm.controls; }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
}
