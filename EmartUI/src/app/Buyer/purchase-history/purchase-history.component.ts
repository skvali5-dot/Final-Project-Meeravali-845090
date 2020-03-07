import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
  phlist:PurchaseHistory[];
  constructor(private service:BuyerService,private route:Router) { 
    let bid=localStorage.getItem('buyerid');
    this.service.GetPurchaseHistory(bid).subscribe(res=>{
      this.phlist=res;
      console.log(this.phlist);
    })
  }
  ngOnInit() {
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
}
