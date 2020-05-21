import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipyEditPage } from './recipy-edit.page';

describe('RecipyEditPage', () => {
  let component: RecipyEditPage;
  let fixture: ComponentFixture<RecipyEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipyEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipyEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
