import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryRequisition } from '../inventory-requisition';
import { InventoryRequisitionService } from '../inventory-requisition.service';


@Component({
  selector: 'app-requisition-summary',
  templateUrl: './requisition-summary.component.html',
  styleUrls: ['./requisition-summary.component.css'],
})
export class RequisitionSummaryComponent implements OnInit {
  searchNumber: string = ''; 
  inventoryRequisitions: InventoryRequisition[] = [];
 
  generatedNumber: string = ''; 
  isMessageVisible: boolean = false;

  constructor(
    private inventoryrequisitionservice: InventoryRequisitionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Fetch all requisitions initially
    this.fetchInventoryRequisitions();
  }

  fetchInventoryRequisitions() {
    this.inventoryrequisitionservice.getInventoryRequisitionDetails().subscribe({
      next: (data) => {
        this.inventoryRequisitions = data;
      },
      error: (err) => console.error('Error fetching data', err),
    });
  }

  // Generate a new inventory number and redirect
  generateInventoryNumber() {

    this.generatedNumber = Math.floor(1000 + Math.random() * 9000).toString();
    this.isMessageVisible = true;

    this.inventoryrequisitionservice.setGeneratedNumber(this.generatedNumber);
    console.log('Generated Number:', this.generatedNumber);

    this.router.navigate(['/homepage'], {
      queryParams: { number: this.generatedNumber },
      queryParamsHandling: 'merge' // This ensures that any other query params are merged
    }).then(() => {
      // After navigating to /homepage, now navigate to /requisition-number
      this.router.navigate(['/requisition-number'], {
        queryParams: { number: this.generatedNumber }
      });
    });
  }
}
