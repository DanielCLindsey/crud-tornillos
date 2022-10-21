import { TestBed } from '@angular/core/testing';

import { TornillosService } from './tornillos.service';

describe('TornillosService', () => {
  let service: TornillosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TornillosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
