import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from 'src/app/CoreFeatures/header/header.component';
import { NavComponent } from 'src/app/CoreFeatures/nav/nav.component';
import { FooterComponent } from 'src/app/CoreFeatures/footer/footer.component';
import { AngularMaterialModule } from '../../Angular Material/angular-material.module';
import { NavModule } from 'src/app/CoreFeatures/nav/nav.module';
import { TransactionChartComponent } from '../components/transaction-chart/transaction-chart.component';
import { TransactionStatusComponent } from '../components/transaction-status/transaction-status.component';
import { TransactionTableComponent } from '../components/transaction-table/transaction-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ HomeComponent, HeaderComponent, FooterComponent, TransactionChartComponent, TransactionStatusComponent, TransactionTableComponent ],
  imports: [ CommonModule, HomeRoutingModule, AngularMaterialModule, NavModule, FormsModule, ReactiveFormsModule ],
})
export class HomeModule { }
