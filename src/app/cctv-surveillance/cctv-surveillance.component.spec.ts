import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CctvSurveillanceComponent } from './cctv-surveillance.component';

describe('CctvSurveillanceComponent', () => {
  let component: CctvSurveillanceComponent;
  let fixture: ComponentFixture<CctvSurveillanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CctvSurveillanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CctvSurveillanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
