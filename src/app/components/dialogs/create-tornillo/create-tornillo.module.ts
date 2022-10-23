import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTornilloComponent } from './create-tornillo.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    CreateTornilloComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports: [
    CreateTornilloComponent
  ]
})
export class CreateTornilloModule { }
