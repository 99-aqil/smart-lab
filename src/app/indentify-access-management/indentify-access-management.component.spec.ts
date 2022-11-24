import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentifyAccessManagementComponent } from './indentify-access-management.component';

describe('IndentifyAccessManagementComponent', () => {
  let component: IndentifyAccessManagementComponent;
  let fixture: ComponentFixture<IndentifyAccessManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndentifyAccessManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndentifyAccessManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
