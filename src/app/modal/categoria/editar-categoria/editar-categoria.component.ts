import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.models';
import { ListenModalCategoriaService } from 'src/app/services/categoria/listen-modal-categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent {

  CategoriaEditar = {
    idCategoria: this.modalSS.$Categoria.idCategoria,
    nombre: this.modalSS.$Categoria.nombre,
    
  }


  categorias: Categoria[] = [];


  constructor(private modalSS: ListenModalCategoriaService, private http: HttpClient){
   
    
  }

  ngOnInit(){

  }


  

  grabarCategoria(){
    this.http.put('http://localhost:5054/api/categoria/actualizar', this.CategoriaEditar).subscribe(
      (response: any) => {
        this.modalSS.cambiosCategoria();
        console.log('Producto enviada:', response);
      },(error) => {
        console.error('Error al enviar el producto:', error);
      });

      this.modalSS.$modalEditarCategoria.emit(false)
  }

  closeModalEditar(){
    this.modalSS.$modalEditarCategoria.emit(false)
   
  }



}
