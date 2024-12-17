import { Component, OnInit} from '@angular/core';
import { ItemCode } from '../item-code';
import { ItemCodeService } from '../item-code.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-item-code-generation',
  templateUrl: './item-code-generation.component.html',
  styleUrl: './item-code-generation.component.css'
})
export class ItemCodeGenerationComponent implements OnInit {
   
  itemcode : ItemCode = new ItemCode();

  ngOnInit(): void {
    

  }

  constructor( private itemcodeservice:ItemCodeService, private router:Router){}

  saveItemCode(){
    this.itemcodeservice.createItemCode(this.itemcode).subscribe(data=>{
      this.navigatePage();
    });
  }

  navigatePage(){
    this.router.navigate(['/item-code-generation'])
  }

  

  // Flag to track form submission state
  formSubmitted = false;

  // Method to handle form submission
  onSubmit(form: any) {
    console.log(this.itemcode);
    this.saveItemCode();
    if (form.valid) {
      this.formSubmitted = true;
      
    } else {
      this.formSubmitted = false;
    }
  }
}
