import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemCode } from './item-code';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemCodeService {

  private baseURL="http://localhost:8080/api/items";

  constructor(private httpclient:HttpClient) { }
   
  createItemCode(itemcode:ItemCode):Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`,itemcode);
  }

  getItemCodebyId(id:number):Observable<ItemCode>{
    return this.httpclient.get<ItemCode>(`${this.baseURL}/${id}`);
  }

  getItemCodeDetails():Observable<ItemCode[]>{
    return this.httpclient.get<ItemCode[]>(`${this.baseURL}`);
  }
}
