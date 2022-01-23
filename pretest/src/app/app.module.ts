import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Q2Component } from './q2/q2.component';
import { Q1Component } from './q1/q1.component';

@NgModule({
  declarations: [
    AppComponent,
    Q2Component,
    Q1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
