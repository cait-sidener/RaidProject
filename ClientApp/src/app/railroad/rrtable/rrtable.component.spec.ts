import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrtableComponent } from './rrtable.component';

describe('RrtableComponent', () => {
  let component: RrtableComponent;
  let fixture: ComponentFixture<RrtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
