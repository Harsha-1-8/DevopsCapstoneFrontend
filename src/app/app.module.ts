import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BOMComponent } from './bom/bom.component';
import { ItemCodeGenerationComponent } from './item-code-generation/item-code-generation.component';
import { BomSubmissionComponent } from './bom-submission/bom-submission.component';
import { GenerateBomComponent } from './generate-bom/generate-bom.component';
import { FormsModule } from '@angular/forms';
import { RequisitionDetailsComponent } from './requisition-details/requisition-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RequisitionFormComponent } from './requisition-form/requisition-form.component';
import { RequisitionSummaryComponent } from './requisition-summary/requisition-summary.component';
import { HttpClientModule } from '@angular/common/http';
import { RequisitionNumberComponent } from './requisition-number/requisition-number.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    BOMComponent,
    ItemCodeGenerationComponent,
    BomSubmissionComponent,
    RequisitionDetailsComponent,
    GenerateBomComponent,
    PageNotFoundComponent,
    RequisitionFormComponent,
    RequisitionSummaryComponent,
    RequisitionNumberComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
