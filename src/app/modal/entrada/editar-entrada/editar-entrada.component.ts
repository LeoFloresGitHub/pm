import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Entrada } from 'src/app/models/entrada.models';
import { Producto } from 'src/app/models/producto.models';

import { ListenModalService } from 'src/app/services/entrada/listen-modal.service';

@Component({
  selector: 'app-editar-entrada',
  templateUrl: './editar-entrada.component.html',
  styleUrls: ['./editar-entrada.component.css']
})
export class EditarEntradaComponent {

  fechaActual: Date = this.modalSS.$Entrada.fecha; 
  fechaActualizada = this.datePipe.transform(this.fechaActual, 'yyyy-MM-dd');
  


  entradaEditar = {
    idEntrada: this.modalSS.$Entrada.idEntrada,
    fecha: this.fechaActualizada,
    idProducto:this.modalSS.$Entrada.idProducto,
    cantidad: this.modalSS.$Entrada.cantidad,
    costo:this.modalSS.$Entrada.costo
  }


  productos: Producto[] = [];
  

  constructor(private modalSS: ListenModalService, private http: HttpClient, private datePipe: DatePipe){
   
    
  }

  ngOnInit(){
    this.obtenerProductos();
  }


  obtenerProductos(){
    this.http.get('http://localhost:5054/api/Producto').subscribe(
      (data: any) => {
        this.productos = data.response; 
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }
  

  grabarEntrada(){
    this.http.put('http://localhost:5054/api/Entrada/actualizar', this.entradaEditar).subscribe(
      (response: any) => {
        this.modalSS.cambiosEntrada();
        console.log('Entrada enviada:', response);
      },(error) => {
        console.error('Error al enviar la entrada:', error);
      });

      this.modalSS.$modalEditarEntrada.emit(false)
  }

  closeModalEditar(){
    this.modalSS.$modalEditarEntrada.emit(false)
   
  }


  
}
