import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrdetailsComponent } from './rrdetails.component';

describe('RrdetailsComponent', () => {
  let component: RrdetailsComponent;
  let fixture: ComponentFixture<RrdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
