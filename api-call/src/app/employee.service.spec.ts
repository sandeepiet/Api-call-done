import { TestBed, inject } from '@angular/core/testing';

import { EpmloyeeService } from './epmloyee.service';

describe('EpmloyeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpmloyeeService]
    });
  });

  it('should be created', inject([EpmloyeeService], (service: EpmloyeeService) => {
    expect(service).toBeTruthy();
  }));
});
