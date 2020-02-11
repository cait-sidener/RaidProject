import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RrnewComponent } from './rrnew.component';

describe('RrnewComponent', () => {
  let component: RrnewComponent;
  let fixture: ComponentFixture<RrnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RrnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
