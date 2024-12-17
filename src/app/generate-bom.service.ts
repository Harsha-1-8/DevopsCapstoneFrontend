import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenerateBom } from './generate-bom';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerateBomService {

  private baseURL="http://localhost:8080/api/bom";

  constructor(private httpclient:HttpClient) { }

  createGenerateBom(generatebom:GenerateBom):Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`,generatebom);
  }

  getGenerateBombyId(id:number):Observable<GenerateBom>{
    return this.httpclient.get<GenerateBom>(`${this.baseURL}/${id}`);
  }

  getBomDetails():Observable<GenerateBom[]>{
    return this.httpclient.get<GenerateBom[]>(`${this.baseURL}`);
  }
}
