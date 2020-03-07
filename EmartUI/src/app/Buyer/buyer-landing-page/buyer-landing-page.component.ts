import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import {Items} from 'src/app/Models/items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {
  list:Items[];
  count:number;
  user:string;
  constructor(private service:BuyerService,private route:Router) {
      this.service.GetAllItems().subscribe(res=>{
        this.list=res;
        console.log(this.list);
        this.user=localStorage.getItem('username');
        console.log(this.user);
      })
      let bid=localStorage.getItem('buyerid');
      this.service.GetCount(bid).subscribe(res=>{
        this.count=res;
        console.log(this.count);
      })
   }
  ngOnInit() {
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

}
