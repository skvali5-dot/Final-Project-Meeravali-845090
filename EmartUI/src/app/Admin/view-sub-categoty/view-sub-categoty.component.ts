import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubCategory } from 'src/app/Models/sub-category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-sub-categoty',
  templateUrl: './view-sub-categoty.component.html',
  styleUrls: ['./view-sub-categoty.component.css']
})
export class ViewSubCategotyComponent implements OnInit {
  RegisterForm7:FormGroup;
  sclist:SubCategory[];
  subcategory:SubCategory;

  constructor(private service:AdminService,private formBuilder:FormBuilder,private route:Router) {
    if(localStorage.getItem('admin')){

    this.service.GetAllSubCategories().subscribe(res=>{
      this.sclist=res;
      console.log(this.sclist);
    },err=>{
      console.log(err);
    })
  }
  else{
    alert('Please Login With Your Credentials')
    this.route.navigateByUrl('/login');
  }
   }

  ngOnInit() {
   this.RegisterForm7=this.formBuilder.group({
     subcategoryid:[''],
     categoryid:[''],
     subcategoryname:[''],
     briefdetails:[''],
     gst:['']
   }) 
  }
  Edit(subcategory:SubCategory){
    this.RegisterForm7.setValue({
      subcategoryid:subcategory.subcategoryId,
      categoryid:subcategory.categoryId,
      subcategoryname:subcategory.subcategoryName,
      gst:subcategory.gst,
      briefdetails:subcategory.briefDetails
    })
  }
  Delete(scid:string){
    let sid=scid;
    this.service.DeleteSubCategory(sid).subscribe(res=>{
      alert('Subcategory Have been Removed');
    },err=>{
      alert('Deletion failed');
    })
  }
  Update(){
    this.subcategory=new SubCategory();
    this.subcategory.subcategoryId=this.RegisterForm7.value['subcategoryid'];
    this.subcategory.categoryId=this.RegisterForm7.value['categoryid'];
    this.subcategory.subcategoryName=this.RegisterForm7.value['subcategoryname'];
    this.subcategory.gst=Number(this.RegisterForm7.value['gst']);
    this.subcategory.briefDetails=this.RegisterForm7.value['briefdetails']
    this.service.UpdateSubCategory(this.subcategory).subscribe(res=>{
      alert('Update Done Successfully');
    },err=>{
      console.log(err);
      alert('Update Failed');
    })
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

}
