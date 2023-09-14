import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { NuevaEntradaComponent } from './modal/entrada/nueva-entrada/nueva-entrada.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EditarEntradaComponent } from './modal/entrada/editar-entrada/editar-entrada.component';
import { NuevaSalidaComponent } from './modal/salida/nueva-salida/nueva-salida.component';
import { EditarSalidaComponent } from './modal/salida/editar-salida/editar-salida.component';
import { SalidaComponent } from './components/salida/salida.component';
import { ProductoComponent } from './components/producto/producto.component';
import { NuevoProductoComponent } from './modal/producto/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './modal/producto/editar-producto/editar-producto.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { NuevoCategoriaComponent } from './modal/categoria/nuevo-categoria/nuevo-categoria.component';
import { EditarCategoriaComponent } from './modal/categoria/editar-categoria/editar-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainNavComponent,
    BannerComponent,
    EntradaComponent,
    NuevaEntradaComponent,
    EditarEntradaComponent,
    NuevaSalidaComponent,
    EditarSalidaComponent,
    SalidaComponent,
    ProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    CategoriaComponent,
    NuevoCategoriaComponent,
    EditarCategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage ,
    FormsModule 
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
