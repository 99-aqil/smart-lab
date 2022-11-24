import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItTrainingCertificationComponent } from './it-training-certification.component';

describe('ItTrainingCertificationComponent', () => {
  let component: ItTrainingCertificationComponent;
  let fixture: ComponentFixture<ItTrainingCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItTrainingCertificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItTrainingCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
