import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNotesDetailsComponent } from './project-notes-details.component';

describe('ProjectNotesDetailsComponent', () => {
  let component: ProjectNotesDetailsComponent;
  let fixture: ComponentFixture<ProjectNotesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectNotesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectNotesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
