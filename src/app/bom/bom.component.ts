import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';  // Import HttpClient

@Component({
  selector: 'app-bom',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.css']
})
export class BOMComponent {

  searchInput: string = '';  // Variable for search input
  itemDetails: any;  // This will store the fetched item details
  errorMessage: string = '';

  // Inject HttpClient into the constructor
  constructor(private http: HttpClient, private router: Router) {}

  // onEnter() {
  //   if (this.searchInput.trim()) {
  //     // Make an HTTP request to fetch the item details
  //     this.http.get<any>(`http://localhost:8080/api/items/search?itemCode=${this.searchInput.trim()}`).subscribe({
  //       next: (response) => {
  //         // Set the response data to itemDetails
  //         this.itemDetails = response;
  
  //         // Navigate to the generate-bom page with query parameters
  //         this.router.navigate(['/generate-bom'], { queryParams: { 
  //           itemCode: this.itemDetails.uniqueItemCode,
  //           description: this.itemDetails.description,
  //           dimensions: this.itemDetails.dimensions,
  //           manufacturer: this.itemDetails.manufacturer
  //         }});
  //       },
  //       error: (error) => {
  //         console.error('Error fetching item details', error);
  //         this.itemDetails = null;  // Clear the item details on error
  //       }
  //     });
  //   }
  // }

  onEnter() {
    if (this.searchInput.trim()) {
      // Clear previous error message and details
      this.errorMessage = '';
      this.itemDetails = null;

      // Make an HTTP request to fetch the item details
      this.http.get<any>(`http://localhost:8080/api/items/search?itemCode=${this.searchInput.trim()}`).subscribe({
        next: (response) => {
          if (response) {
            // Item exists, set the item details
            this.itemDetails = response;

            // Navigate to the generate-bom page with query parameters
            this.router.navigate(['/generate-bom'], {
              queryParams: {
                itemCode: this.itemDetails.uniqueItemCode,
                description: this.itemDetails.description,
                dimensions: this.itemDetails.dimensions,
                manufacturer: this.itemDetails.manufacturer
              }
            });
          } else {
            // Item does not exist, show error message
            this.errorMessage = 'Invalid item code. Please try again.';
          }
        },
        error: (error) => {
          console.error('Error fetching item details', error);
          // Show error message for invalid item code or server error
          this.errorMessage = 'Invalid item code. Please try again.';
        }
      });
    } else {
      // Show an error message if input is empty
      this.errorMessage = 'Please enter a valid item code.';
    }
  }
  
}
