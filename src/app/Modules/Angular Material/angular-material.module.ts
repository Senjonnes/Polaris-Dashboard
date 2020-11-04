import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatIconModule,
    MatRadioModule,  MatButtonModule, MatSelectModule, MatTableModule, MatPaginatorModule, 
    MatDialogModule, MatIconModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule
  ],
  exports: [
    MatStepperModule, MatFormFieldModule, MatInputModule, MatIconModule,
    MatRadioModule,  MatButtonModule, MatSelectModule, MatTableModule, MatPaginatorModule, 
    MatDialogModule, MatIconModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule
  ]
})
export class AngularMaterialModule { }
