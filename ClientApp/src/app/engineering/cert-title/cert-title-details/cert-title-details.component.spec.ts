import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertTitleDetailsComponent } from './cert-title-details.component';

describe('CertTitleDetailsComponent', () => {
  let component: CertTitleDetailsComponent;
  let fixture: ComponentFixture<CertTitleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertTitleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertTitleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
