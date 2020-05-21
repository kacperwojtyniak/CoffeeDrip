import { TestBed } from '@angular/core/testing';

import { CoffeeReviewsRepositoryService } from './reviews-repository.service';

describe('ReviewsRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoffeeReviewsRepositoryService = TestBed.get(CoffeeReviewsRepositoryService);
    expect(service).toBeTruthy();
  });
});
