
import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ListenModalService } from 'src/app/services/entrada/listen-modal.service';
import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'app-nueva-entrada',
  templateUrl: './nueva-entrada.component.html',
  styleUrls: ['./nueva-entrada.component.css']
})
export class NuevaEntradaComponent {

  fechaActual: Date = new Date(); 
  fechaActualizada = this.datePipe.transform(this.fechaActual, 'yyyy-MM-dd');

  

  nuevaEntrada = {
    fecha: this.fechaActualizada,
    idProducto: 1,
    cantidad: 2,
    costo: 0
  }


  productos: Producto[] = [];

  constructor(private modalSS: ListenModalService, private http: HttpClient, private datePipe: DatePipe){
   
    
  }

  ngOnInit(){
    this.obtenerProductos();
  }

  

  closeModalNuevo(){
    this.modalSS.$modal.emit(false)
   
  }

  enviarElemento() {
   
    this.modalSS.$modal.emit(false)
    
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

  enviarEntrada(){
    if(this.nuevaEntrada.cantidad == 0){
      alert("Rellenar los campos correctamente");

      return
    } 
    
    this.http.post('http://localhost:5054/api/Entrada/subir', this.nuevaEntrada).subscribe(
      (response: any) => {
        this.modalSS.cambiosEntrada();
        console.log('Entrada enviada:', response);
      },(error) => {
        console.error('Error al enviar la entrada:', error);
      });
    
    this.modalSS.$modal.emit(false);
    
    
  }

}
