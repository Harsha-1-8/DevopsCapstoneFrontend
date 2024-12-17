import { Component, OnInit } from '@angular/core';
import { GenerateBom } from '../generate-bom';
import { GenerateBomService } from '../generate-bom.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-generate-bom',
  templateUrl: './generate-bom.component.html',
  styleUrl: './generate-bom.component.css'
})
export class GenerateBomComponent implements OnInit{

  itemCode!: string;
  description!: string;
  dimensions!: string;
  manufacturer!: string;

  generatebom : GenerateBom = new GenerateBom();

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.itemCode = params['itemCode'] || ''; 
      this.generatebom.uniqueItemCode = this.itemCode; 
      this.description = params['description'];
      this.generatebom.description = this.description;
      this.dimensions = params['dimensions'];
      this.generatebom.dimensions = this.dimensions;
      this.manufacturer = params['manufacturer'];
      this.generatebom.manufacturer = this.manufacturer;
    });

  }

  constructor( private generatebomservice:GenerateBomService, private router:Router, private route: ActivatedRoute){}

  saveGenerateBom(){
    this.generatebomservice.createGenerateBom(this.generatebom).subscribe(data=>{
      this.navigatePage();
    });
  }

  navigatePage(){
    this.router.navigate(['/generate-bom'])
  }


  isSubmitted = false;  // Flag to track form submission

  // Method to handle form submission
  onSubmit(form: any) {
    if (form.valid) {
      this.isSubmitted = true;  // Set to true to show success message
      console.log('Form submitted successfully', form.value);  // Handle form data
      // You can add logic here to handle the form data, e.g., send it to a server
    } else {
      alert('Please fill all required fields correctly.');
    }
  }

  bomForm = {
    invalid: false // Placeholder for form validity
  };

  // Function to handle button click
  submitBOM() {
    this.isSubmitted = true; // Show success message on button click
    this.saveGenerateBom();

  }
}