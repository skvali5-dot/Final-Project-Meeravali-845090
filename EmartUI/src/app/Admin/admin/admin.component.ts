import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private route:Router) {
    if(localStorage.getItem('admin')){

    }
    else{
      alert('Please Login With Your Credentials');
      this.route.navigateByUrl('/login');
    }
   }

  ngOnInit() {
  }
Logout(){
  localStorage.clear();
  this.route.navigateByUrl('login');
}
}
