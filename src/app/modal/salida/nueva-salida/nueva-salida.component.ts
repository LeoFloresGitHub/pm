import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ListenModalSalidaService } from 'src/app/services/salida/listen-modal-salida.service';
import { Producto } from 'src/app/models/producto.models';

@Component({
  selector: 'app-nueva-salida',
  templateUrl: './nueva-salida.component.html',
  styleUrls: ['./nueva-salida.component.css']
})
export class NuevaSalidaComponent {

  fechaActual: Date = new Date(); 
  fechaActualizada = this.datePipe.transform(this.fechaActual, 'yyyy-MM-dd');

  precioProducto: number = 0;
  totality:number = 0;
  productos: Producto[] = [];

  nuevaSalida = {
    fecha: this.fechaActualizada,
    idProducto: 1,
    cantidad: 0,
    descuento: 0,
    total: 0,
    delivery:0,
    precio:0
  }

  constructor(private modalSS: ListenModalSalidaService, private http: HttpClient, private datePipe: DatePipe){
    
  }

  async ngOnInit(){
    await this.obtenerProductos();
    
    if(this.productos[0].idProducto){
    this.obtenerPrecio(this.productos[0].idProducto);}

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


  obtenerPrecio(id: number): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get(`http://localhost:5054/api/Producto/${id}`).subscribe(
        (response: any) => {
          this.precioProducto = response.precio;
          resolve();
        },
        (error) => {
          console.error('Error al obtener la salida:', error);
          reject(error);
        }
      );
    });
  }


  subirSalida(){

    this.http.post('http://localhost:5054/api/Salida/subir', this.nuevaSalida).subscribe(
      (response: any) => {
        this.modalSS.cambiosSalida();
      },(error) => {
        console.error('Error al enviar la salida:', error);
      });
  }


  async  enviarSalida(){
   
    await this.obtenerPrecio(this.nuevaSalida.idProducto);
    

    this.subirSalida();
    
    this.modalSS.$modal.emit(false);
    
  }
  

  closeModalNuevo(){
    this.modalSS.$modal.emit(false)
   
  }


  cambiarDetalles(id: number) {
    for (const producto of this.productos) {
      if (producto.idProducto == id) {
        this.precioProducto = producto.precio;
        break; // Si encuentras el producto, puedes salir del bucle
      }
    }
    
    // Actualizar el total basado en el nuevo precio y las propiedades de nuevaSalida
    this.totality = (this.precioProducto * this.nuevaSalida.cantidad) + this.nuevaSalida.delivery - this.nuevaSalida.descuento;
    this.nuevaSalida.total = this.totality;
    this.nuevaSalida.precio = this.precioProducto;
  }




}
