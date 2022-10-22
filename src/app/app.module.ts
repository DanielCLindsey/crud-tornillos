import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { tornilloReducer, TORNILLOS_FEATURE_KEY } from './stores/tornillos/tornillos.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TornillosEffects } from './stores/tornillos/tornillos.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BrowserAnimationsModule,
    RouterModule,
    StoreModule.forRoot({
      [TORNILLOS_FEATURE_KEY]: tornilloReducer
    }),
    EffectsModule.forRoot([TornillosEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
