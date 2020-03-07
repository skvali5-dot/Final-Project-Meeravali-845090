import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/Services/seller.service';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {
  plist:PurchaseHistory[];
  constructor(private service:SellerService,private route:Router) {
   let sid=localStorage.getItem('sellerid');
    this.service.GetReports(sid).subscribe(res=>{
      this.plist=res;
      console.log(this.plist);
    })
   }
  ngOnInit() {
  }
  Caluculate(id:string){
    console.log(id);
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }
}
