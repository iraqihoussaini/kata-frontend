import { TestBed } from '@angular/core/testing';

import { KataBackendService } from './kata-backend.service';

describe('KataBackendService', () => {
  let service: KataBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KataBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
