import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipyDetails } from './recipy.component';

describe('RecipyComponent', () => {
  let component: RecipyDetails;
  let fixture: ComponentFixture<RecipyDetails>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipyDetails ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipyDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
