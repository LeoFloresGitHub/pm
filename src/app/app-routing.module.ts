import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './components/home/banner/banner.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { SalidaComponent } from './components/salida/salida.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BannerComponent },
  { path: 'entradas', component: EntradaComponent },
  { path: 'salidas', component: SalidaComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'categorias', component: CategoriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
