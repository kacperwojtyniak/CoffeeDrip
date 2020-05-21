import { TestBed } from '@angular/core/testing';

import { CoffeesProviderService } from './coffees-provider.service';

describe('CoffeesProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoffeesProviderService = TestBed.get(CoffeesProviderService);
    expect(service).toBeTruthy();
  });
});
