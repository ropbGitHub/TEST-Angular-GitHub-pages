import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibroInicioComponent } from './pages/libro-inicio/libro-inicio.component';
import { LibroDetalleComponent } from './pages/libro-detalle/libro-detalle.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LibrosComponent } from './libros.component';

@NgModule({
  declarations: [LibroInicioComponent, LibroDetalleComponent, LibrosComponent],
  imports: [CommonModule, LibrosRoutingModule, SharedModule],
})
export class LibrosModule {}
