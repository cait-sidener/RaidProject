import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanFilesComponent } from './plan-files.component';

describe('PlanFilesComponent', () => {
  let component: PlanFilesComponent;
  let fixture: ComponentFixture<PlanFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
