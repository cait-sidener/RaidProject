import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanRevisionsComponent } from './plan-revisions.component';

describe('PlanRevisionsComponent', () => {
  let component: PlanRevisionsComponent;
  let fixture: ComponentFixture<PlanRevisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanRevisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanRevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
