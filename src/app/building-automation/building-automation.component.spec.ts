import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingAutomationComponent } from './building-automation.component';

describe('BuildingAutomationComponent', () => {
  let component: BuildingAutomationComponent;
  let fixture: ComponentFixture<BuildingAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingAutomationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
