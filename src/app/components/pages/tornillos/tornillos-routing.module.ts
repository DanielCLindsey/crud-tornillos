import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule, Routes } from '@angular/router';
import { TornillosComponent } from './tornillos.component';

const routes: Routes = [
  {
    path: '',
    component: TornillosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, MatDialogModule]
})
export class TornillosRoutingModule { }
