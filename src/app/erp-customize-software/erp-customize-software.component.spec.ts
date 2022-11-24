import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpCustomizeSoftwareComponent } from './erp-customize-software.component';

describe('ErpCustomizeSoftwareComponent', () => {
  let component: ErpCustomizeSoftwareComponent;
  let fixture: ComponentFixture<ErpCustomizeSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErpCustomizeSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErpCustomizeSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
