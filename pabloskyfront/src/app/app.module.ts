import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TipoCampoComponent } from './componentes/tipo-campo/tipo-campo.component';
import { ListtipoCampoComponent } from './componentes/listtipo-campo/listtipo-campo.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoCampoComponent,
    ListtipoCampoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
