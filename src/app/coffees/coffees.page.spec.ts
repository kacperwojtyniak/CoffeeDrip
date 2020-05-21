import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeesPage } from './coffees.page';

describe('CoffeesPage', () => {
  let component: CoffeesPage;
  let fixture: ComponentFixture<CoffeesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
