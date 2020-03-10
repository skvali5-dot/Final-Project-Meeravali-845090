import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Buyer } from 'src/app/Models/buyer';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { ThrowStmt } from '@angular/compiler';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  list:Items[];
  itemname:string;
  item:Items;
  isShow:boolean=true;
  clist:Category[];
  cart:Cart;
  category:string;
  count:number;
  constructor(private service:BuyerService,private route:Router) {
    if(localStorage.getItem('buyerid')){

    this.service.GetCategories().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })
    let bid=localStorage.getItem('buyerid');
    this.service.GetCount(bid).subscribe(res=>{
      this.count=res;
      console.log(this.count);
    })
  }
  else{
    alert('please login With your Credentials');
    this.route.navigateByUrl('/login');
  }
   }
  ngOnInit() {
  }
  Show(){
    this.isShow=!this.isShow;
  }
  Search(name:string){
    this.service.GetByName(name).subscribe(res=>{
      this.list=res;
    })
  }
  Buy(item1:Items){
      console.log(item1);
      localStorage.setItem('item1',JSON.stringify(item1));
      this.route.navigateByUrl('/buy-product');
  }
  SearchByCategory(id:string){
    this.service.GetItemByCategoryId(id).subscribe(res=>{
      this.list=res;
      console.log(this.list);
    })

  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }
  AddtoCart(item2:Items){
    console.log(item2);
    let bid=localStorage.getItem('buyerid');
   this.cart=new Cart();
   this.cart.cartid='CID'+Math.round(Math.random()*1000);
   this.cart.id=item2.id;
   this.cart.itemname=item2.itemName;
   this.cart.categoryid=item2.categoryId;
   this.cart.subcategoryid=item2.subcategoryId;
   this.cart.sellerid=item2.sellerid;
   this.cart.stocknumber=item2.stockNumber;
   this.cart.price=item2.price;
   this.cart.description=item2.description;
   this.cart.remarks=item2.remarks;
   this.cart.imagename=item2.imagename;
   this.cart.buyerid=bid;
   console.log(this.cart);
   this.service.AddtoCart(this.cart).subscribe(res=>{
     console.log("Record added To Cart");
     alert('Item has been Added To Cart');
   })
  }
}
