import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemMainComponent } from 'src/app/Modules/Main/components/nav-item-main/nav-item-main.component';
import { NavComponent } from './nav.component';
import { NavItemPaymentComponent } from 'src/app/Modules/Main/components/nav-item-payment/nav-item-payment.component';
import { NavItemOrdersComponent } from 'src/app/Modules/Main/components/nav-item-orders/nav-item-orders.component';

@NgModule({
  declarations: [ NavComponent, NavItemMainComponent, NavItemPaymentComponent, NavItemOrdersComponent ],
  imports: [ CommonModule ],
  exports: [ NavComponent ]
})
export class NavModule { }
