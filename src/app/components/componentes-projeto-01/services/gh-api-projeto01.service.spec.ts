import { TestBed } from '@angular/core/testing';

import { GhApiProjeto01Service } from './gh-api-projeto01.service';

describe('GhApiProjeto01Service', () => {
  let service: GhApiProjeto01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GhApiProjeto01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
