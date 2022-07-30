import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';
import { NoticiaInicioComponent } from './pages/noticia-inicio/noticia-inicio.component';
import { NoticiaArticuloComponent } from './pages/noticia-articulo/noticia-articulo.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    NoticiasComponent,
    NoticiaInicioComponent,
    NoticiaArticuloComponent,
  ],
  imports: [CommonModule, NoticiasRoutingModule, SharedModule],
})
export class NoticiasModule {} // import at app.module.ts
