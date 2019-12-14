import { TestBed } from '@angular/core/testing';

import { ExtinctionService } from './extinction.service';

describe('ExtinctionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtinctionService = TestBed.get(ExtinctionService);
    expect(service).toBeTruthy();
  });
});
