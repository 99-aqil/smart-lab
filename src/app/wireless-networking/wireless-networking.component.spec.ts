import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WirelessNetworkingComponent } from './wireless-networking.component';

describe('WirelessNetworkingComponent', () => {
  let component: WirelessNetworkingComponent;
  let fixture: ComponentFixture<WirelessNetworkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WirelessNetworkingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WirelessNetworkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
