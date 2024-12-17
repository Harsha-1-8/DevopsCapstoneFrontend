import { TestBed } from '@angular/core/testing';

import { GenerateBomService } from './generate-bom.service';

describe('GenerateBomService', () => {
  let service: GenerateBomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateBomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
