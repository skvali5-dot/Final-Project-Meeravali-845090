import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Buyer } from '../Models/buyer';
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
}
