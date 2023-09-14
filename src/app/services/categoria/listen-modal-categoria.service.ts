import {EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Categoria } from 'src/app/models/categoria.models';

@Injectable({
  providedIn: 'root'
})
export class ListenModalCategoriaService {

  listaCategorias:Categoria[] = [];
  $modal = new EventEmitter<any>();
  $modalEditarCategoria = new EventEmitter<any>();
  $Categoria!: Categoria;

  private categoriaAgregadaSubject = new Subject<void>();
  $categoriaAgregada = this.categoriaAgregadaSubject.asObservable();

  
  constructor() { }

  /*agregarElemento(elemento: Entrada) {
    this.listaEntradas.push(elemento);
  }*/

  obtenerCategoria(e:Categoria){
    this.$Categoria = e;
  }

  cambiosCategoria(){
    this.categoriaAgregadaSubject.next(); 
  }

 
}
