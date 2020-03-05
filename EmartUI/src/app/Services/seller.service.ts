import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Items } from 'src/app/Models/items';
import{Seller} from 'src/app/Models/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-type':'application/json',
  'Authorization':'Bearer'+localStorage.getItem('token')
})}

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  url:string='http://localhost:50001/';

  constructor(private http:HttpClient) { }
  public AddItems(items:Items):Observable<any>
  {
    return this.http.post(this.url+'Item/AddItems',items,Requestheaders);
  }
  public ViewItems(sellerid:string):Observable<any>
  {
    return this.http.get(this.url+'Item/ViewItems/'+sellerid,Requestheaders);
  }
  public ViewProfile(id:string):Observable<any>
  {
      return this.http.get<any>(this.url+'Seller/GetProfile/'+id,Requestheaders);
  }
  public Update(seller:Seller):Observable<any>
  {
    return this.http.put<any>(this.url+'Seller/EditProfile',seller,Requestheaders);
  }
  public GetItem(id:string):Observable<any>
  {
    return this.http.get<any>(this.url+'Item/GetItem/'+id,Requestheaders);
  }
  public UpdateItems(items:Items):Observable<any>
  {
    return this.http.put<any>(this.url+'Item/UpdateItemsStock',items,Requestheaders);
  }
  public GetCategories():Observable<any>
  {
    return this.http.get<any>(this.url+'Item/GetCategories',Requestheaders);
  }
  public GetSubCategories(id:string):Observable<any>
  {
    return this.http.get<any>(this.url+'Item/GetSubCategories/'+id,Requestheaders);
  }
  public DeleteItem(id:string):Observable<any>{
    return this.http.delete<any>(this.url+'Item/DeleteItem/'+id,Requestheaders);
  }
}
