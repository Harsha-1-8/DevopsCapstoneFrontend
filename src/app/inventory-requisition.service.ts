import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InventoryRequisition } from './inventory-requisition';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryRequisitionService {

  private generatedNumber: string = '';
  
  private baseURL="http://localhost:8080/api/inventoryrequisition";

  constructor(private httpclient:HttpClient) { }

  // Method to set the generated number
  setGeneratedNumber(number: string) {
    this.generatedNumber = number;
  }

  // Method to get the generated number
  getGeneratedNumber(): string {
    return this.generatedNumber;
  }
  

  createInventoryRequisition(inventoryrequisition:InventoryRequisition):Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`,inventoryrequisition);
  }

  getInventoryRequisitionbyId(id:number):Observable<InventoryRequisition>{
    return this.httpclient.get<InventoryRequisition>(`${this.baseURL}/${id}`);
  }

  getInventoryRequisitionDetails():Observable<InventoryRequisition[]>{
    return this.httpclient.get<InventoryRequisition[]>(`${this.baseURL}`);
  }

}
