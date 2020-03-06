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
  constructor(private service:BuyerService,private route:Router) {
      this.service.GetAllItems().subscribe(res=>{
        this.list=res;
        console.log(this.list);
      })
   }
  ngOnInit() {
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

}
