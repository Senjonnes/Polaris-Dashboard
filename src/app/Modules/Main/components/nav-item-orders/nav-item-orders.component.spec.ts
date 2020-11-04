import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemOrdersComponent } from './nav-item-orders.component';

describe('NavItemOrdersComponent', () => {
  let component: NavItemOrdersComponent;
  let fixture: ComponentFixture<NavItemOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
