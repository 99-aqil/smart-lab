import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCenterDesignImplementationComponent } from './data-center-design-implementation.component';

describe('DataCenterDesignImplementationComponent', () => {
  let component: DataCenterDesignImplementationComponent;
  let fixture: ComponentFixture<DataCenterDesignImplementationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCenterDesignImplementationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCenterDesignImplementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
