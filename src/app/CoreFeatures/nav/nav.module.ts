import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemMainComponent } from 'src/app/Modules/Main/components/nav-item-main/nav-item-main.component';
import { NavComponent } from './nav.component';

@NgModule({
  declarations: [ NavComponent, NavItemMainComponent ],
  imports: [ CommonModule ],
  exports: [ NavComponent ]
})
export class NavModule { }
