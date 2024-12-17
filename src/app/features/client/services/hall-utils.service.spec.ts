import { TestBed } from '@angular/core/testing';

import { HallUtilsService } from './hall-utils.service';

describe('HallUtilsService', () => {
  let service: HallUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HallUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
