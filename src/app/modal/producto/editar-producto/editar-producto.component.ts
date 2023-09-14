import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto.models';
import { Categoria } from 'src/app/models/categoria.models';
import { ListenModalProductoService } from 'src/app/services/producto/listen-modal-producto.service';
@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent {


  
  productoEditar = {
    idProducto: this.modalSS.$Producto.idProducto,
    nombre: this.modalSS.$Producto.nombre,
    idCategoria: this.modalSS.$Producto.idCategoria,
    marca:this.modalSS.$Producto.marca,
    cantidad: this.modalSS.$Producto.cantidad,
    precio:this.modalSS.$Producto.precio,
  }


  categorias: Categoria[] = [];


  constructor(private modalSS: ListenModalProductoService, private http: HttpClient, private datePipe: DatePipe){
   
    
  }

  ngOnInit(){

    this.obtenerCategorias();
  }


  obtenerCategorias() {
    this.http.get('http://localhost:5054/api/Producto').subscribe(
      (data: any) => {
      
        data.response.forEach((p: { oCategoria: Categoria; }) => {
          if (!this.categorias.some(categoria => categoria.idCategoria === p.oCategoria.idCategoria)) {
            this.categorias.push(p.oCategoria);
          }
        });
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  

  grabarProducto(){
    this.http.put('http://localhost:5054/api/producto/actualizar', this.productoEditar).subscribe(
      (response: any) => {
        this.modalSS.cambiosProducto();
        console.log('Producto enviada:', response);
      },(error) => {
        console.error('Error al enviar el producto:', error);
      });

      this.modalSS.$modalEditarProducto.emit(false)
  }

  closeModalEditar(){
    this.modalSS.$modalEditarProducto.emit(false)
   
  }



}
