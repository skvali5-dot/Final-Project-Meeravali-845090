import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Category } from 'src/app/Models/category';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  clist:Category[];
  RegisterForm7:FormGroup;
  category:Category;
  constructor(private service:AdminService,private formBuilder:FormBuilder,private route:Router) {
    if(localStorage.getItem('admin')){

    this.service.GetAllCategories().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })
  }
  else{
    alert('Please Login with Your Credentials')
    this.route.navigateByUrl('/login');
  }
   }
  ngOnInit() {
    this.RegisterForm7=this.formBuilder.group({
      categoryid:[''],  
      categoryname:[''],
      briefdetails:[''],
    });
    
  }
  Edit(item:Category){
    console.log(item);
    this.category=item;
    console.log(this.category);
    this.RegisterForm7.patchValue({
      categoryid:this.category.categoryId,
      categoryname:this.category.categoryName,
      briefdetails:this.category.briefDetails
    })
  }
  Delete(id:string){
    this.service.DeleteCategory(id).subscribe(res=>{
      alert('Category was Removed Successfully');
    })
  }
  Update(){
    this.category=new Category();
    this.category.categoryId=this.RegisterForm7.value["categoryid"];
    this.category.categoryName=this.RegisterForm7.value["categoryname"];
    this.category.briefDetails=this.RegisterForm7.value["briefdetails"]
    console.log(this.category);
    this.service.UpdateCategory(this.category).subscribe(res=>{
      alert('Update Done Successfully');
    },err=>{
      alert('Update Failed');
    })
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
}
