import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemPaymentComponent } from './nav-item-payment.component';

describe('NavItemPaymentComponent', () => {
  let component: NavItemPaymentComponent;
  let fixture: ComponentFixture<NavItemPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
