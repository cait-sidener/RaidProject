import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingRwComponent } from './existing-rw.component';

describe('ExistingRwComponent', () => {
  let component: ExistingRwComponent;
  let fixture: ComponentFixture<ExistingRwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingRwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingRwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
