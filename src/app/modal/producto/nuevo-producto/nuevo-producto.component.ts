import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/models/producto.models';
import { Categoria } from 'src/app/models/categoria.models';
import { ListenModalProductoService } from 'src/app/services/producto/listen-modal-producto.service';


@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent {
  nuevaProducto = {
    nombre: "",
    idCategoria: 1,
    marca:"",
    cantidad: 0,
    precio:0,
  }

  categorias: Categoria[] = [];

  constructor(private modalSS: ListenModalProductoService, private http: HttpClient){
   
  }

  ngOnInit(){

    this.obtenerCategorias();
  }

  obtenerCategorias() {
    this.http.get('http://localhost:5054/api/Categoria').subscribe(
      (data: any) => {
/*
        data.response.forEach((p: { oCategoria: Categoria; }) => {
          if (!this.categorias.some(categoria => categoria.idCategoria === p.oCategoria.idCategoria)) {
            this.categorias.push(p.oCategoria);
          }
        });*/
        this.categorias = data;
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

  enviarEntrada(){
    
    this.http.post('http://localhost:5054/api/Producto/guardar', this.nuevaProducto).subscribe(
      (response: any) => {
        this.modalSS.cambiosProducto();
        console.log('Producto enviado:', response);
      },(error) => {
        console.error('Error al enviar el producto:', error);
      });
    
    this.modalSS.$modal.emit(false);
    
    
  }


  closeModalNuevo(){
    this.modalSS.$modal.emit(false)
   
  }

  enviarElemento() {
    this.modalSS.$modal.emit(false)
  }



  

}
