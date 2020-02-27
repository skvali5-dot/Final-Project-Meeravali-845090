import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import {Items} from 'src/app/Models/items';
import { combineLatest } from 'rxjs';
import { SellerService } from 'src/app/Services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  RegisterForm4:FormGroup;
  submitted=false;
  items:Items;
  constructor(private formBuilder:FormBuilder,private service:SellerService,private route:Router) { }

  ngOnInit() {
    this.RegisterForm4=this.formBuilder.group({
      id:[''],
      categoryId:[''],
      subcategoryId:[''],
      sellerid:[''],
      price:[''],
      itemName:[''],
      description:[''],
      stockNumber:[''],
      remarks:['']
    });
  }
  onSubmit()
  {
      this.submitted=true;
      if(this.RegisterForm4.valid)
      {
        this.items=new Items();
        this.items.id=this.RegisterForm4.value["id"];
        this.items.categoryId=this.RegisterForm4.value["categoryId"];
        this.items.subcategoryId=this.RegisterForm4.value["subcategoryId"];
        this.items.sellerid=this.RegisterForm4.value["sellerid"];
        this.items.itemName=this.RegisterForm4.value["itemName"];
        this.items.price=this.RegisterForm4.value["price"];
        this.items.description=this.RegisterForm4.value["description"];
        this.items.stockNumber=this.RegisterForm4.value["stockNumber"];
        this.items.remarks=this.RegisterForm4.value["remarks"];
        console.log(this.items);
        this.service.AddItems(this.items).subscribe(res=>{
        }
        ,err=>{
        console.log(err);
        })
      }
  }
  Search()
  {
    let id1=this.RegisterForm4.value["id"];
    console.log(id1);
    this.service.GetItem(id1).subscribe(res=>{
      this.items=res;
      console.log(this.items);
      this.RegisterForm4.setValue({
        id:this.items.id,
        categoryId:this.items.categoryId,
        subcategoryId:this.items.subcategoryId,
        sellerid:this.items.sellerid,
        itemName:this.items.itemName,
        price:this.items.price,
        description:this.items.description,
        stockNumber:this.items.stockNumber,
        remarks:this.items.remarks
      })
    })

  }
  Update()
  {
    this.items=new Items();
    this.items.id=this.RegisterForm4.value["id"];
    this.items.categoryId=this.RegisterForm4.value["categoryId"];
    this.items.subcategoryId=this.RegisterForm4.value["subcategoryId"];
    this.items.sellerid=this.RegisterForm4.value["sellerid"];
    this.items.itemName=this.RegisterForm4.value["itemName"];
    this.items.price=this.RegisterForm4.value["price"];
    this.items.description=this.RegisterForm4.value["description"];
    this.items.stockNumber=this.RegisterForm4.value["stockNumber"];
    this.items.remarks=this.RegisterForm4.value["remarks"];
    console.log(this.items);
  this.service.UpdateItems(this.items).subscribe(res=>{
    console.log('Record Updated');
  }
  ,err=>{
    console.log(err);
  })
  }
  onReset(){
    this.submitted=false;
  this.RegisterForm4.reset();
  }
  Logout(){
    this.route.navigateByUrl('/login');
  }
}