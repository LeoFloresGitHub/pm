import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/models/producto.models';
import { ListenModalSalidaService } from 'src/app/services/salida/listen-modal-salida.service';


@Component({
  selector: 'app-editar-salida',
  templateUrl: './editar-salida.component.html',
  styleUrls: ['./editar-salida.component.css']
})
export class EditarSalidaComponent {

  fechaActual: Date = this.modalSS.$Salida.fecha; 
  fechaActualizada = this.datePipe.transform(this.fechaActual, 'yyyy-MM-dd');

  //precioProducto: number = 1;

  salidaEditar = {
    idSalida: this.modalSS.$Salida.idSalida,
    fecha: this.fechaActualizada,
    idProducto:this.modalSS.$Salida.idProducto,
    cantidad: this.modalSS.$Salida.cantidad,
    descuento:this.modalSS.$Salida.descuento,
    total:this.modalSS.$Salida.total,
    delivery: this.modalSS.$Salida.delivery,
    precio: this.modalSS.$Salida.precio
  }

  
  productos: Producto[] = [];


  constructor(private modalSS: ListenModalSalidaService, private http: HttpClient, private datePipe: DatePipe){
   
    
  }

  async ngOnInit(){
    await this.obtenerProductos();

    
  }

  obtenerProductos(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get(`http://localhost:5054/api/Producto`).subscribe(
        (data: any) => {
          this.productos = data.response; 
          resolve();
        },
        (error) => {
          console.error('Error al obtener la salida:', error);
          reject(error);
        }
      );
    });
  }

  async grabarSalida(){

    await this.obtenerPrecio(this.salidaEditar.idProducto);
    this.salidaEditar.total = (this.salidaEditar.cantidad * +this.salidaEditar.precio)-  this.salidaEditar.descuento;

    this.http.put('http://localhost:5054/api/Salida/actualizar', this.salidaEditar).subscribe(
      (response: any) => {
        this.modalSS.cambiosSalida();
        console.log('Salida enviada:', response);
      },(error) => {
        console.error('Error al enviar la salida:', error);
      });

      this.modalSS.$modalEditarSalida.emit(false)
  }

  closeModalEditar(){
    this.modalSS.$modalEditarSalida.emit(false)
   
  }

  obtenerPrecio(id: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get(`http://localhost:5054/api/Producto/${id}`).subscribe(
        (response: any) => {
          //this.precioProducto = response.precio;
          resolve();
        },
        (error) => {
          console.error('Error al obtener la salida:', error);
          reject(error);
        }
      );
    });
  }

  cambiarDetalles(id: number) {
    /*for (const producto of this.productos) {
      if (producto.idProducto == id) {
        this.precioProducto = producto.precio;
        break; // Si encuentras el producto, puedes salir del bucle
      }
    }*/
    
    // Actualizar el total basado en el nuevo precio y las propiedades de nuevaSalida
    
    this.salidaEditar.total = (this.salidaEditar.precio * this.salidaEditar.cantidad) + this.salidaEditar.delivery - this.salidaEditar.descuento;

  
  }

}
