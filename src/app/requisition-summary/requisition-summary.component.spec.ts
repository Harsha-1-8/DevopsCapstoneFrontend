import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionSummaryComponent } from './requisition-summary.component';

describe('RequisitionSummaryComponent', () => {
  let component: RequisitionSummaryComponent;
  let fixture: ComponentFixture<RequisitionSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequisitionSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisitionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
