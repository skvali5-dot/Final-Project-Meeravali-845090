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
  constructor(private formBuilder:FormBuilder,private service:AdminService,private route:Router) { }

  ngOnInit() {
    this.RegisterForm2=this.formBuilder.group({
      categoryid:[''],
      categoryname:[''],
      briefdetails:['']
    });
  }
  onSubmit()
  {
      this.submitted=true;
      if(this.RegisterForm2.valid)
      {
        this.category=new Category();
        this.category.categoryid=this.RegisterForm2.value["categoryid"];
        this.category.categoryname=this.RegisterForm2.value["categoryname"];
        this.category.briefdetails=this.RegisterForm2.value["briefdetails"];
        console.log(this.category);
      this.service.AddCategory(this.category).subscribe(res=>{
      },err=>{
        console.log(err);
      })
      }
  }
  onReset(){
    this.submitted=false;
  this.RegisterForm2.reset();
  }
Logout(){
  this.route.navigateByUrl('/login');
}
}
