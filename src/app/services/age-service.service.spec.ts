import { TestBed } from '@angular/core/testing';

import { AgeServiceService } from './age-service.service';

describe('AgeServiceService', () => {
  let service: AgeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
