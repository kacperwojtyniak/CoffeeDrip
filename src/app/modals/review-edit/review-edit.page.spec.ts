import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewEditPage } from './review-edit.page';

describe('ReviewEditPage', () => {
  let component: ReviewEditPage;
  let fixture: ComponentFixture<ReviewEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
