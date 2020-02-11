import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianHistoryDetailsComponent } from './technician-history-details.component';

describe('TechnicianHistoryDetailsComponent', () => {
  let component: TechnicianHistoryDetailsComponent;
  let fixture: ComponentFixture<TechnicianHistoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicianHistoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
