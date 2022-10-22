import { NgModule } from '@angular/core';
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
  exports: [RouterModule]
})
export class TornillosRoutingModule { }
