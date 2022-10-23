import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TornillosComponent } from './tornillos.component';
import { TornillosRoutingModule } from './tornillos-routing.module';
import { ContentModule } from '../../content/content.module';
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FooterModule } from '../../footer/footer.module';
import { CreateTornilloModule } from '../../dialogs/create-tornillo/create-tornillo.module';
import { DeleteTornilloModule } from '../../dialogs/delete-tornillo/delete-tornillo.module';
import { ConfigTableModule } from '../../dialogs/config-table/config-table.module';


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
    MatPaginatorModule,
    FooterModule,
    CreateTornilloModule,
    DeleteTornilloModule,
    ConfigTableModule
  ],
  exports: [
    TornillosComponent
  ]
})
export class TornillosModule { }
