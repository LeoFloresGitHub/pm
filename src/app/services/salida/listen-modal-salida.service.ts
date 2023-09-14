import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Salida } from 'src/app/models/salida.models';

@Injectable({
  providedIn: 'root'
})
export class ListenModalSalidaService {
  listaSalidas:Salida[] = [];
  $modal = new EventEmitter<any>();
  $modalEditarSalida = new EventEmitter<any>();
  $Salida!: Salida;
  $SalidaPrecio: number = 0;

  private salidaAgregadaSubject = new Subject<void>();
  $salidaAgregada = this.salidaAgregadaSubject.asObservable();

  
  constructor() { }

  obtenerSalida(e:Salida){
    this.$Salida = e;
  }

  cambiosSalida(){
    this.salidaAgregadaSubject.next();  //Escuchar cuando ocurra un cambios 
  }

}
