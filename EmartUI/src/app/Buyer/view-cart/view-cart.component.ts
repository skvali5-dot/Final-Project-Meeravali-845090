import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Cart } from 'src/app/Models/cart';
import{Items} from 'src/app/Models/items';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
cartlist:Cart[];
item:Items;
count:number;
  constructor(private route:Router,private service:BuyerService) {
    if(localStorage.getItem('buyerid')){
    let bid=localStorage.getItem('buyerid');
    this.service.GetCartItems(bid).subscribe(res=>{
      this.cartlist=res;
      console.log(this.cartlist);
    })
  }
  else{
    alert('please login With your Credentials');
    this.route.navigateByUrl('/login');
  }
   }
  ngOnInit() {
  }
BuyNow(item1:Items){
      console.log(item1);
      this.item=item1;
      localStorage.setItem('item1',JSON.stringify(this.item));
      this.route.navigateByUrl('/buy-product');
}
Remove(cartid:string)
{
  console.log(cartid);
  let id=cartid;
  this.service.RemoveCartItem(id).subscribe(res=>{
    console.log('Item Removed from Cart');
    alert('Item Removed from Cart');
  })
}
Logout(){
  localStorage.clear();
  this.route.navigateByUrl('/login');
}
}
