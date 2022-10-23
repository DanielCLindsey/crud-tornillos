import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteTornilloComponent } from './delete-tornillo.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    DeleteTornilloComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    DeleteTornilloComponent
  ]
})
export class DeleteTornilloModule { }
