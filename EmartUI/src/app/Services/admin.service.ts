import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';
const Requestheaders={headers:new HttpHeaders({
  'Content-type':'application/json'
})}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string='http://localhost:50001/Admin/';

  constructor(private http:HttpClient) { }
  public AddCategory(category:Category):Observable<any>{
    return this.http.post<any>(this.url+'AddCategory',category,Requestheaders);
  }
  public AddSubCategory(subcategory:SubCategory):Observable<any>{
    return this.http.post<any>(this.url+'AddSubCategory',subcategory,Requestheaders);
  }
}
