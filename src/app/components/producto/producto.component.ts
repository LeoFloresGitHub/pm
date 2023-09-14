import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';
import { HttpClient } from '@angular/common/http';
import { ListenModalProductoService } from 'src/app/services/producto/listen-modal-producto.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {


  modalNuevoSwitch:boolean = false;
  modalEditarSwitch:boolean = false;
  productos: Producto[] = [];
 
  constructor(private modalSS: ListenModalProductoService,private http: HttpClient){

  }

  ngOnInit(){

    this.modalSS.$modal.subscribe(valor=>this.modalNuevoSwitch = valor);
    this.modalSS.$modalEditarProducto.subscribe(valor=>this.modalEditarSwitch = valor);
    this.obtenerProductos();
    this.modalSS.$productoAgregada.subscribe(() => {
      // Aquí puedes recargar los datos o actualizar la vista
      this.obtenerProductos(); // Supongo que tienes un método para cargar las entradas
    });
   

  }

 
  obtenerProductos() {
    this.http.get('http://localhost:5054/api/Producto').subscribe(
      (data: any) => {
        this.productos = data.response;
       
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }


  enviarProducto(e: number){
    const productoEditar:Producto = this.productos[e];
    this.modalSS.obtenerProducto(productoEditar);
    this.modalEditarSwitch = true;
    
  }
 


  eliminarProducto(e: number){
  
    const confirmacion = confirm("¿Estás seguro de que quieres eliminar el producto?");

    if(confirmacion){
      this.http.delete(`http://localhost:5054/api/Producto/eliminar/${this.productos[e].idProducto}`).subscribe(
        (response: any) => {
          this.modalSS.cambiosProducto();
        },
        (error) => {
          console.error('Error al obtener los productos:', error);
        }
      );
    } 
  }
  openModalNuevo(){
    this.modalNuevoSwitch = true;
  }

  openModalEditar(){
    this.modalEditarSwitch = true;
  }

}
