import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import {Category} from 'src/app/Models/category';
import { combineLatest } from 'rxjs';
import { AdminService } from 'src/app/Services/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  RegisterForm2:FormGroup;
  submitted=false;
  category:Category;
  constructor(private formBuilder:FormBuilder,private service:AdminService,private route:Router) { 
    if(localStorage.getItem('admin')){

    }
    else{
      alert('please login With your Credentials');
      this.route.navigateByUrl('/login');
    }
  }

  ngOnInit() {
    this.RegisterForm2=this.formBuilder.group({
      categoryname:['',[Validators.required]],
      briefdetails:['',[Validators.required]]
    });
  }
  onSubmit()
  {
      this.submitted=true;
      if(this.RegisterForm2.valid)
      {
        this.category=new Category();
        this.category.categoryId='C'+Math.round(Math.random()*1000);
        this.category.categoryName=this.RegisterForm2.value["categoryname"];
        this.category.briefDetails=this.RegisterForm2.value["briefdetails"];
        console.log(this.category);
        alert('Category Added Successfully');
        this.service.AddCategory(this.category).subscribe(res=>{
        },err=>{
          console.log(err);
        })
      }
      else{
        alert('form is not Validated');
      }
  }
  get f() { return this.RegisterForm2.controls; }
  onReset(){
    this.submitted=false;
  this.RegisterForm2.reset();
  }
Logout(){
  localStorage.clear();
  this.route.navigateByUrl('/login');
}
}
