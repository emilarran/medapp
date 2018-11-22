import { TestBed } from '@angular/core/testing';

import { MedService } from './med.service';

describe('MedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedService = TestBed.get(MedService);
    expect(service).toBeTruthy();
  });
});
