import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    canActivate: [AngularFireAuthGuard],
    loadChildren: () => import('./components/pages/tornillos/tornillos.module').then(m => m.TornillosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
