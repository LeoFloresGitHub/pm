import { EventEmitter, Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListenModalProductoService {
  listaProductos:Producto[] = [];
  $modal = new EventEmitter<any>();
  $modalEditarProducto = new EventEmitter<any>();
  $Producto!: Producto;

  private productoAgregadaSubject = new Subject<void>();
  $productoAgregada = this.productoAgregadaSubject.asObservable();

  
  constructor() { }

  /*agregarElemento(elemento: Entrada) {
    this.listaEntradas.push(elemento);
  }*/

  obtenerProducto(e:Producto){
    this.$Producto = e;
  }

  cambiosProducto(){
    this.productoAgregadaSubject.next(); 
  }

 
}
