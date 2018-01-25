import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { PeoplePickerComponent } from './ng2-people-picker.component';

describe('PeoplePickerComponent', () => {

  let comp:    PeoplePickerComponent;
  let fixture: ComponentFixture<PeoplePickerComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplePickerComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(PeoplePickerComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('Should be false', () => {
    expect(false).toBe(true);
  });
});
