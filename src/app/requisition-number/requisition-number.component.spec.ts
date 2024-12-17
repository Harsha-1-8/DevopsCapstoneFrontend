import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisitionNumberComponent } from './requisition-number.component';

describe('RequisitionNumberComponent', () => {
  let component: RequisitionNumberComponent;
  let fixture: ComponentFixture<RequisitionNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequisitionNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequisitionNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
