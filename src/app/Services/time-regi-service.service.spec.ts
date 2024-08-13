import { TestBed } from '@angular/core/testing';

import { TimeRegiServiceService } from './Services/time-regi-service.service';

describe('TimeRegiServiceService', () => {
  let service: TimeRegiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeRegiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
