import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Buyer } from '../Models/buyer';
import { PurchaseHistory } from '../Models/purchase-history';
import { Cart } from '../Models/cart';
const Requestheaders={headers:new HttpHeaders({
  'Content-type':'application/json',
  'Authorization':'Bearer'+localStorage.getItem('token')
})}


@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:50001/';

  constructor(private http:HttpClient) { }
  public ViewProfile(id:string):Observable<any>
  {
    return this.http.get<any>(this.url+'Buyer/GetProfile/'+id,Requestheaders);
  }
  public Update(buyer:Buyer):Observable<any>{
    return this.http.put<any>(this.url+'Buyer/EditProfile',buyer,Requestheaders);
  }
  public GetAllItems():Observable<any>{
    return this.http.get<any>(this.url+'Buyer/GetAllItems',Requestheaders);
  }
  public GetByName(name:string):Observable<any>{
    return this.http.get<any>(this.url+'Buyer/SearchItemByName/'+name,Requestheaders);
  }
  public GetById(id:string):Observable<any>{
    return this.http.get<any>(this.url+'Item/GetItem/'+id,Requestheaders);
  }
  public BuyItem(obj:PurchaseHistory):Observable<any>{
    return this.http.post<any>(this.url+'Buyer/BuyItem',obj,Requestheaders);
  }
  public GetCategories():Observable<any>{
    return this.http.get<any>(this.url+'Buyer/GetCategories',Requestheaders);
  }
  public GetItemByCategoryId(id:string):Observable<any>{
    return this.http.get<any>(this.url+'Buyer/SearchItemByCategory/'+id,Requestheaders);
  }
  public AddtoCart(cart:Cart):Observable<any>{
    return this.http.post<any>(this.url+'Buyer/AddtoCart',cart,Requestheaders);
  }
  public GetCartItems():Observable<any>
  {
    return this.http.get<any>(this.url+'Buyer/GetCartItems',Requestheaders);
  }
  public RemoveCartItem(itemid:string):Observable<any>
  {
    return this.http.delete<any>(this.url+'Buyer/DeleteCartItem/'+itemid,Requestheaders);
  }
}
