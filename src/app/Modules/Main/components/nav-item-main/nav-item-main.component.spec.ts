import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItemMainComponent } from './nav-item-main.component';

describe('NavItemMainComponent', () => {
  let component: NavItemMainComponent;
  let fixture: ComponentFixture<NavItemMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItemMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
