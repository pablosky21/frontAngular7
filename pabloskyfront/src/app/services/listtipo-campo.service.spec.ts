import { TestBed } from '@angular/core/testing';

import { ListtipoCampoService } from './listtipo-campo.service';

describe('ListtipoCampoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListtipoCampoService = TestBed.get(ListtipoCampoService);
    expect(service).toBeTruthy();
  });
});
