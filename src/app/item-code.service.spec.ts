import { TestBed } from '@angular/core/testing';

import { ItemCodeService } from './item-code.service';

describe('ItemCodeService', () => {
  let service: ItemCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
