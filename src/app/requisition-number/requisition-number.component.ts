import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryRequisitionService } from '../inventory-requisition.service';

@Component({
  selector: 'app-requisition-number',
  templateUrl: './requisition-number.component.html',
  styleUrl: './requisition-number.component.css'
})
export class RequisitionNumberComponent implements OnInit{


  generatedNumber: string = '';
  isMessageVisible: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the generated number from the query parameters
    this.route.queryParams.subscribe(params => {
      this.generatedNumber = params['number'];
      if (this.generatedNumber) {
        this.isMessageVisible = true;
      }
    });
  }  

}
