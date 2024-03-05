import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Padre2Component } from './padre2/padre2.component';
import { HijoComponent } from './hijo/hijo.component';


@NgModule({
  declarations: [
    AppComponent,
    Padre2Component,
    HijoComponent       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
