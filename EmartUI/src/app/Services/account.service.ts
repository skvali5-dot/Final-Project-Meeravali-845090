import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Buyer } from 'src/app/Models/buyer';
import {Seller} from 'src/app/Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-type':'application/json'
})}
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url:string='http://localhost:50001/User/';

  constructor(private http:HttpClient) { }
  public BuyerSignup(buyer:Buyer):Observable<any>
  {
      return this.http.post<any>(this.url+'BuyerSignUp',buyer,Requestheaders);
  }
  public SellerSignUp(seller:Seller):Observable<any>
  {
    return this.http.post<any>(this.url+'SellerSignUp',seller,Requestheaders);
  }
  public BuyerLogin(username:string,password:string):Observable<any>
  {
     return this.http.get<Buyer>(this.url+'BuyerLogin/'+username+'/'+password,Requestheaders);
  }
}
