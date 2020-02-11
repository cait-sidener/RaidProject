import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanFilesDetailsComponent } from './plan-files-details.component';

describe('PlanFilesDetailsComponent', () => {
  let component: PlanFilesDetailsComponent;
  let fixture: ComponentFixture<PlanFilesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanFilesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanFilesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
