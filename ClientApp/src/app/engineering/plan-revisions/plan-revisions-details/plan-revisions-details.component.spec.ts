import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRevisionsDetailsComponent } from './plan-revisions-details.component';

describe('PlanRevisionsDetailsComponent', () => {
  let component: PlanRevisionsDetailsComponent;
  let fixture: ComponentFixture<PlanRevisionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanRevisionsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanRevisionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
