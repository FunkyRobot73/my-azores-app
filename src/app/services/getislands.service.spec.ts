import { TestBed } from '@angular/core/testing';

import { GetislandsService } from './getislands.service';

describe('GetislandsService', () => {
  let service: GetislandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetislandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
