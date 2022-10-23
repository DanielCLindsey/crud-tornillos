import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigTableComponent } from './config-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ConfigTableComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ConfigTableComponent
  ]
})
export class ConfigTableModule { }
