import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuredCablingComponent } from './structured-cabling.component';

describe('StructuredCablingComponent', () => {
  let component: StructuredCablingComponent;
  let fixture: ComponentFixture<StructuredCablingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuredCablingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuredCablingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
