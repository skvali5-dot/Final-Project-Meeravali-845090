import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Buyer } from 'src/app/Models/buyer';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  list:Items[];
  itemname:string;
  item:Items;
  constructor(private service:BuyerService,private route:Router) { }

  ngOnInit() {
  }
  Search(name:string){
    this.service.GetByName(name).subscribe(res=>{
      this.list=res;
    //   console.log(this.ite);
    //   console.log(this.ite.id)
    //   let id=JSON.stringify(this.item);
    //   localStorage.setItem('item',JSON.stringify(this.ite));
    //   console.log(this.list);
    })
  }
  Buy(item1:Items){

    // this.service.GetById(id).subscribe(res=>{
    //   this.item=res;
     // console.log(this.item);
      //console.log(this.item.id);
    //  console.log(item1);
   // })
      console.log(item1);
      localStorage.setItem('item1',JSON.stringify(item1));
      this.route.navigateByUrl('/buy-product');
  }

}
