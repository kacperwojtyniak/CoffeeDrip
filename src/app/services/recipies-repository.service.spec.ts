import { TestBed } from '@angular/core/testing';

import { RecipiesRepositoryService } from './recipies-repository.service';

describe('RecipiesRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipiesRepositoryService = TestBed.get(RecipiesRepositoryService);
    expect(service).toBeTruthy();
  });
});
