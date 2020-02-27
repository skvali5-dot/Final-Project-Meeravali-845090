import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import {SubCategory} from 'src/app/Models/sub-category';
import { combineLatest } from 'rxjs';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {

  RegisterForm3:FormGroup;
  submitted=false;
  subcategory:SubCategory;
  constructor(private formBuilder:FormBuilder,private service:AdminService) { }

  ngOnInit() {
    this.RegisterForm3=this.formBuilder.group({
      subcategoryid:[''],
      subcategoryname:[''],
      categoryid:[''],
      briefdetails:[''],
      GST:['']
    });
  }
  onSubmit()
  {
      this.submitted=true;
      if(this.RegisterForm3.valid)
      {
        this.subcategory=new SubCategory();
        this.subcategory.subcategoryid=this.RegisterForm3.value["subcategoryid"];
        this.subcategory.subcategoryname=this.RegisterForm3.value["subcategoryname"];
        this.subcategory.categoryid=this.RegisterForm3.value["categoryid"];
        this.subcategory.briefdetails=this.RegisterForm3.value["briefdetails"];
        this.subcategory.GST=Number(this.RegisterForm3.value["GST"]);
        console.log(this.subcategory);
      this.service.AddSubCategory(this.subcategory).subscribe(res=>{
      },err=>{
        console.log(err);
      })
      }
  }
  onReset(){
    this.submitted=false;
  this.RegisterForm3.reset();
  }
}
