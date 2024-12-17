import { Component, OnInit } from '@angular/core';
import { GenerateBomService } from '../generate-bom.service';

@Component({
  selector: 'app-bom-submission',
  templateUrl: './bom-submission.component.html',
  styleUrl: './bom-submission.component.css'
})
export class BomSubmissionComponent implements OnInit  {

  bomDetails: any[] = [];

  constructor(private bomService: GenerateBomService) {}

  ngOnInit() {
    this.fetchBomDetails();
  }

  fetchBomDetails() {
    this.bomService.getBomDetails().subscribe(
      (data) => {
        this.bomDetails = data;
      },
      (error) => {
        console.error('Error fetching BOM details', error);
      }
    );
  }

  submitBOM() {
    if (this.bomDetails.length === 0) {
      console.log('No BOM details to submit.');
      alert('No BOM details to submit.');
    } else {
      console.log('BOM submitted successfully!');
      console.log('Submitted BOM Details:', this.bomDetails);
      alert('BOM submitted successfully!');
    }
  }
}
