import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyNotesComponent } from './survey-notes.component';

describe('SurveyNotesComponent', () => {
  let component: SurveyNotesComponent;
  let fixture: ComponentFixture<SurveyNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
