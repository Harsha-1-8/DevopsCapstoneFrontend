import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryRequisition } from '../inventory-requisition';
import { InventoryRequisitionService } from '../inventory-requisition.service';


@Component({
  selector: 'app-requisition-details',
  templateUrl: './requisition-details.component.html',
  styleUrls: ['./requisition-details.component.css'],
})
export class RequisitionDetailsComponent implements OnInit{

  inventoryRequisitions: InventoryRequisition[] = [];
  generatedNumber: string = '';

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.generatedNumber = params['number']; // Retrieve the generatedNumber from query params
      console.log('Generated number:', this.generatedNumber); // Optional, to check the value
    });

    this.inventoryrequisitionservice.getInventoryRequisitionDetails().subscribe({
      next: (data) => {
        this.inventoryRequisitions = data;
      },
      error: (err) => console.error('Error fetching data', err),
    });
  }

  formData: any = {};
  status: string = ''; // Holds the current status
  showPopup: boolean = false;

  constructor(private inventoryrequisitionservice: InventoryRequisitionService, private router: Router,
    private route: ActivatedRoute
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.formData = navigation?.extras.state?.['data'] || {};
  }

  setStatus(status: string) {
    this.status = status; // Set status to Approved or Rejected
  }

  onSubmit() {
    if (this.status) {
      this.showPopup = true; // Show popup with the status
    }
  }

  closePopup() {
    this.showPopup = false;
    // Navigate to the summary page, passing the status and formData
    this.router.navigate(['/requisition-summary'], {
      state: { data: { ...this.formData, status: this.status } },
    });
  }
}
