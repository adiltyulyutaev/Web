import { TestBed } from '@angular/core/testing';

import { KekserviceService } from './kekservice.service';

describe('KekserviceService', () => {
  let service: KekserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KekserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
