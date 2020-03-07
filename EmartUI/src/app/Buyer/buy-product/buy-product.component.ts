import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { combineLatest } from 'rxjs';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Items } from 'src/app/Models/items';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';


@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  RegisterForm:FormGroup;
  constructor(private service:BuyerService,private formBuilder:FormBuilder,private route:Router) { }
  item:Items;
  cart:Cart;
  obj:PurchaseHistory;
  submitted=false;
  ngOnInit() {
    this.RegisterForm=this.formBuilder.group({
      transactiontype:['',Validators.required],
      cardnumber:['',Validators.required],
      cvv:['',Validators.required],
      ed:['',Validators.required],
      name:['',Validators.required],
      numberofitems:['',Validators.required],
      remarks:['',Validators.required]
    })
     this.cart=JSON.parse(localStorage.getItem('item1'));
     console.log(this.cart);
     console.log(this.cart.id);
  }
  onSubmit()
  {
      this.submitted=true;
      if(this.RegisterForm.valid){
      this.obj=new PurchaseHistory();
      this.obj.id='TID'+Math.round(Math.random()*1000);
      this.obj.buyerid=localStorage.getItem('buyerid');
      this.obj.sellerid=this.cart.sellerid;
      this.obj.numberofitems=this.RegisterForm.value["numberofitems"];
      this.obj.itemid=this.cart.id;
      this.obj.transactiontype=this.RegisterForm.value["transactiontype"]
      this.obj.datetime=new Date();
      this.obj.remarks=this.RegisterForm.value["remarks"];
      console.log(this.obj);
      this.service.BuyItem(this.obj).subscribe(res=>{
       console.log("Purchase was Sucessfull");
       alert('Purchase Done Successfully');
       this.Delete();
      },err=>{
         alert('Please add Details');
      })
    }
    }
    Delete(){
      console.log(this.cart.cartid);
      let id=this.cart.cartid
      this.service.RemoveCartItem(id).subscribe(res=>{
        console.log('Cart item Removed');
      })
    }
Logout(){
  localStorage.clear();
  this.route.navigateByUrl('/login');
}
get f() { return this.RegisterForm.controls; }
}

