import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentManagementDigitalLibraryComponent } from './document-management-digital-library.component';

describe('DocumentManagementDigitalLibraryComponent', () => {
  let component: DocumentManagementDigitalLibraryComponent;
  let fixture: ComponentFixture<DocumentManagementDigitalLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentManagementDigitalLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentManagementDigitalLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
