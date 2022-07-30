import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosComponent } from './libros.component';
import { LibroDetalleComponent } from './pages/libro-detalle/libro-detalle.component';
import { LibroInicioComponent } from './pages/libro-inicio/libro-inicio.component';

const routes: Routes = [
  {
    path: 'libros',
    component: LibrosComponent,
    children: [
      { path: '', component: LibroInicioComponent },
      { path: 'inicio', component: LibroInicioComponent },
      { path: 'detalle', component: LibroDetalleComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibrosRoutingModule {}
