import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionDetailsComponent } from './requisition-details.component';

describe('RequisitionDetailsComponent', () => {
  let component: RequisitionDetailsComponent;
  let fixture: ComponentFixture<RequisitionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequisitionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisitionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
