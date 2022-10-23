import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTornilloComponent } from './create-tornillo.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CreateTornilloComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    CreateTornilloComponent
  ]
})
export class CreateTornilloModule { }
