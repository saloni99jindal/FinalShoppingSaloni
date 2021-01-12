import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private http:HttpClient) { }
  url:string = "http://localhost:54405/";
  filterbyprice(p1:any):Observable<any>
  {
     // debugger;
      return this.http.get("http://localhost:54405/FilterByPrice?price="+p1);
  }

  filterbycategory(cname:string):Observable<any>
  {
     // debugger;
     return this.http.get("http://localhost:54405/FilterByCategory?cname="+cname);
  }
  filterbyboth(p1:string,cname:string):Observable<any>
  {
    return this.http.get("http://localhost:54405/FilterByBoth?price="+p1+" &cname="+cname);
  }
  sortByPriceAsc():Observable<any>
  {
    return this.http.get("http://localhost:54405/SortByPrice");
  }
  sortByPriceDesc():Observable<any>
  {
    return this.http.get("http://localhost:54405/SortByPriceDesc");
  }
  getallcategory():Observable<any>{
    return this.http.get("http://localhost:54405/GetByCategory");
  }
}