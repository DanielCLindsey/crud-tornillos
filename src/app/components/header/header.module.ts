import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PERSISTENCE } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    { provide: PERSISTENCE, useValue: 'session' }
  ]
})
export class HeaderModule { }
