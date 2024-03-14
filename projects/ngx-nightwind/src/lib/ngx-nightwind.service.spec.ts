import { TestBed } from '@angular/core/testing';

import { NgxNightwind } from './ngx-nightwind.service';

describe('NgxNightwindService', () => {
  let service: NgxNightwind;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNightwind);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
