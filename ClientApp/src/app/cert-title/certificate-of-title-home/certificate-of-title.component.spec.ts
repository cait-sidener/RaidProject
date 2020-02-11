import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateOfTitleComponent } from './certificate-of-title.component';

describe('CertificateOfTitleComponent', () => {
  let component: CertificateOfTitleComponent;
  let fixture: ComponentFixture<CertificateOfTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateOfTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateOfTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
