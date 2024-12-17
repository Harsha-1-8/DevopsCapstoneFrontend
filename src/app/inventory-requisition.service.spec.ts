import { TestBed } from '@angular/core/testing';

import { InventoryRequisitionService } from './inventory-requisition.service';

describe('InventoryRequisitionService', () => {
  let service: InventoryRequisitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryRequisitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
