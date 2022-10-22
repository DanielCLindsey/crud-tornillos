import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TornillosComponent } from './tornillos.component';
import { TornillosRoutingModule } from './tornillos-routing.module';



@NgModule({
  declarations: [
    TornillosComponent
  ],
  imports: [
    CommonModule,
    TornillosRoutingModule
  ],
  exports: [
    TornillosComponent
  ]
})
export class TornillosModule { }
