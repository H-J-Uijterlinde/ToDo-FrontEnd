import { TestBed } from '@angular/core/testing';

import { BoodschappenService } from './boodschappen.service';

describe('BoodschappenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoodschappenService = TestBed.get(BoodschappenService);
    expect(service).toBeTruthy();
  });
});
