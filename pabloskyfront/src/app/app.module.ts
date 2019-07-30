import {BrowserModule }from '@angular/platform-browser';
import {NgModule }from '@angular/core';
import {HttpClientModule }from '@angular/common/http';

import {AppComponent }from './app.component';
import {TipoCampoComponent }from './componentes/tipo-campo/tipo-campo.component';
import {ListtipoCampoComponent }from './componentes/listtipo-campo/listtipo-campo.component';
import {ListtipoCampoService}from  './services/listtipo-campo.service';
import {FormsModule }from '@angular/forms';

@NgModule( {
declarations:[
    AppComponent,
TipoCampoComponent,
ListtipoCampoComponent
  ],
imports:[
    BrowserModule,
HttpClientModule,
FormsModule
  ],
providers:[ListtipoCampoService],
bootstrap:[AppComponent]
})
export class AppModule {}
