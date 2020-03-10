import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import {SubCategory} from 'src/app/Models/sub-category';
import { combineLatest } from 'rxjs';
import { AdminService } from 'src/app/Services/admin.service';
import { Category } from 'src/app/Models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {

  RegisterForm3:FormGroup;
  submitted=false;
  subcategory:SubCategory;
  categorylist:Category[];
  constructor(private formBuilder:FormBuilder,private service:AdminService,private route:Router) { 
    if(localStorage.getItem('admin')){
    this.service.GetAllCategories().subscribe(res=>{
      this.categorylist=res;
      console.log(this.categorylist);
    })
  }
  else{
    alert('please login With your Credentials');
    this.route.navigateByUrl('/login');
  }
  }

  ngOnInit() {
    this.RegisterForm3=this.formBuilder.group({
      subcategoryname:['',Validators.required],
      categoryid:['',Validators.required],
      briefdetails:['',Validators.required],
      GST:['',[Validators.required,Validators.pattern('^[0-9]{1,3}$')]]
    });
  }
  onSubmit()
  {
      this.submitted=true;
      if(this.RegisterForm3.valid)
      {
        this.subcategory=new SubCategory();
        this.subcategory.subcategoryid='SC'+Math.round(Math.random()*1000);
        this.subcategory.subcategoryname=this.RegisterForm3.value["subcategoryname"];
        this.subcategory.categoryid=this.RegisterForm3.value["categoryid"];
        this.subcategory.briefdetails=this.RegisterForm3.value["briefdetails"];
        this.subcategory.GST=Number(this.RegisterForm3.value["GST"]);
        console.log(this.subcategory);
        alert('SubCategory Added Successfully');
      this.service.AddSubCategory(this.subcategory).subscribe(res=>{
      },err=>{
        console.log(err);
      })
      }
  }
  get f() { return this.RegisterForm3.controls; }
  onReset(){
    this.submitted=false;
  this.RegisterForm3.reset();
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
}
