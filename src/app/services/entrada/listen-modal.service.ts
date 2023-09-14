import { EventEmitter, Injectable } from '@angular/core';
import { Entrada } from '../../models/entrada.models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListenModalService {

  listaEntradas:Entrada[] = [];
  $modal = new EventEmitter<any>();
  $modalEditarEntrada = new EventEmitter<any>();
  $Entrada!: Entrada;

  private entradaAgregadaSubject = new Subject<void>();
  $entradaAgregada = this.entradaAgregadaSubject.asObservable();

  
  constructor() { }

  /*agregarElemento(elemento: Entrada) {
    this.listaEntradas.push(elemento);
  }*/

  obtenerEntrada(e:Entrada){
    this.$Entrada = e;
  }

  cambiosEntrada(){
    this.entradaAgregadaSubject.next(); 
  }

 


}
