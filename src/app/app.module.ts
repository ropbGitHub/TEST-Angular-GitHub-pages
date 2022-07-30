import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoticiasModule } from './modules/noticias/noticias.module';
import { LibrosModule } from './modules/libros/libros.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoticiasModule,
    LibrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
