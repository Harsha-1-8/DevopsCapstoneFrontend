import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryRequisitionService } from '../inventory-requisition.service';
import { InventoryRequisition } from '../inventory-requisition';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-requisition-form',
  templateUrl: './requisition-form.component.html',
  styleUrls: ['./requisition-form.component.css'],
})
export class RequisitionFormComponent implements OnInit {

  inventoryrequisition: InventoryRequisition = new InventoryRequisition();
  minDate!: string;
  a!:string;

  constructor(
    private inventoryrequisitionservice: InventoryRequisitionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  saveInventoryRequisition() {

    this.inventoryrequisitionservice
      .createInventoryRequisition(this.inventoryrequisition)
      .subscribe((data) => {
        this.navigatePage();
      });
  }

  navigatePage() {
    this.router.navigate(['/requisition-summary']);
  }

  onSave(form: NgForm) {
    if (form.valid) {
      this.saveInventoryRequisition();
      const formData = form.value;
      this.router.navigate(['/requisition-summary'], { state: { data: formData } });
    }
  }

  InventoryRequisition = {
    uniqueItemCode: '',
  };
  isMessageVisible: boolean = false;
  isSubmitVisible: boolean = false;

  // Handle the SAVE button click
  handleSave() {
    if (this.inventoryrequisition.uniqueItemCode) {
      // Show success message
      this.isMessageVisible = true;

      // Show the submit button
      this.isSubmitVisible = true;

      // Hide the success message after 3 seconds
      setTimeout(() => {
        this.isMessageVisible = false;
      }, 3000);
    } else {
      alert('Please enter a valid Item Code before saving.');
    }
  }

  resetForm(form: NgForm): void {
    this.inventoryrequisition = new InventoryRequisition();
    form.resetForm();
    this.isMessageVisible = false;
    this.isSubmitVisible = false;
  }

  // Handle the form submission
  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted', this.inventoryrequisition);
      alert('Form submitted successfully!');
    } else {
      alert('Please complete the form before submitting.');
    }
  }
}
