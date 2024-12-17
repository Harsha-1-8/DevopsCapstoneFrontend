import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  notifications: string[] = [];
  showNotifications: boolean = false; // To control notification dropdown visibility

  // Hardcoded array of 4-digit numbers
  fourDigitNumbers: string[] = [
    '1234', '5678', '9101', '1122', '3344', '5566', '7788', '9900',
    '2345', '6789', '3456', '7890'
  ];

  hardcodedIRNumber: string = ''; // IR number to be displayed

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Pick a random IR number from the array on each refresh
    this.selectRandomIRNumber();
    // Create the notification message using the randomly selected IR number
    this.notifications = [`IR ${this.hardcodedIRNumber} needs approval`];
  }

  // Selects a random IR number from the array
  selectRandomIRNumber(): void {
    const randomIndex = Math.floor(Math.random() * this.fourDigitNumbers.length);
    this.hardcodedIRNumber = this.fourDigitNumbers[randomIndex];
  }

  // Toggles the visibility of the notifications dropdown
  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
  }

  // Navigates to the details page with the current IR number as a query parameter
  navigateToDetailsPage(): void {
    this.router.navigate(['/requisition-details'], {
      queryParams: { number: this.hardcodedIRNumber },
    });
  }
}
