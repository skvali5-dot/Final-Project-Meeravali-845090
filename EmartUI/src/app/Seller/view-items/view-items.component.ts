import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/Services/seller.service';
import { FormBuilder } from '@angular/forms';
import {Items} from "src/app/Models/items";
@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {

  list:Items[];
  constructor(private service:SellerService,private formBuilder:FormBuilder) { 
  }

  ngOnInit() {
    this.ViewItems();
  }
  ViewItems()
  { 
    this.service.ViewItems("S001").subscribe(res=>
      {
        this.list=res;
        console.log(this.list);
      },
      err=>{
        console.log(err);
      });
  }

}
