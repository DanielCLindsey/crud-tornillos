import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TornillosComponent } from './tornillos.component';
import { TornillosRoutingModule } from './tornillos-routing.module';
import { ContentModule } from '../../content/content.module';
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    TornillosComponent
  ],
  imports: [
    CommonModule,
    TornillosRoutingModule,
    ContentModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  exports: [
    TornillosComponent
  ]
})
export class TornillosModule { }
