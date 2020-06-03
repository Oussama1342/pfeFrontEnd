import { TestBed } from '@angular/core/testing';

import { RecomandationProductService } from './recomandation-product.service';

describe('RecomandationProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecomandationProductService = TestBed.get(RecomandationProductService);
    expect(service).toBeTruthy();
  });
});
