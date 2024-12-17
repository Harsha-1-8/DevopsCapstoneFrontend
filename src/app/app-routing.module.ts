import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BomSubmissionComponent } from './bom-submission/bom-submission.component';
import { GenerateBomComponent } from './generate-bom/generate-bom.component';
import { ItemCodeGenerationComponent } from './item-code-generation/item-code-generation.component';
import { BOMComponent } from './bom/bom.component';
import { RequisitionFormComponent } from './requisition-form/requisition-form.component';
import { RequisitionDetailsComponent } from './requisition-details/requisition-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RequisitionSummaryComponent } from './requisition-summary/requisition-summary.component';
import { RequisitionNumberComponent } from './requisition-number/requisition-number.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  
  { path: 'homepage', component: HomepageComponent },

  { path: 'bom-submission', component: BomSubmissionComponent },
  { path: 'generate-bom', component: GenerateBomComponent },
  { path: 'item-code-generation', component: ItemCodeGenerationComponent},
  { path: 'bom', component: BOMComponent},
  {path:'',redirectTo:'/homepage',pathMatch:'full'},
  
  
  { path: 'requisition-form', component: RequisitionFormComponent },
  { path: 'requisition-details', component: RequisitionDetailsComponent },
  { path: 'requisition-summary', component: RequisitionSummaryComponent },
  { path: 'requisition-number', component: RequisitionNumberComponent },

  { path: '', redirectTo: '/form', pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
