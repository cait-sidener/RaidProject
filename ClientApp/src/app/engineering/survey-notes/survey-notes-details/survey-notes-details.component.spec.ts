import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyNotesDetailsComponent } from './survey-notes-details.component';

describe('SurveyNotesDetailsComponent', () => {
  let component: SurveyNotesDetailsComponent;
  let fixture: ComponentFixture<SurveyNotesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyNotesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyNotesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
