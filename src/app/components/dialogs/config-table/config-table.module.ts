import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigTableComponent } from './config-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop'



@NgModule({
  declarations: [
    ConfigTableComponent
  ],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    ConfigTableComponent
  ]
})
export class ConfigTableModule { }
