import { TestBed } from '@angular/core/testing';

import { OsobyService } from './osoby.service';

describe('OsobyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsobyService = TestBed.get(OsobyService);
    expect(service).toBeTruthy();
  });
});
