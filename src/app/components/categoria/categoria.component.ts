import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.models';
import { HttpClient } from '@angular/common/http';
import { ListenModalCategoriaService } from 'src/app/services/categoria/listen-modal-categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
modalNuevoSwitch:boolean = false;
modalEditarSwitch:boolean = false;
categorias:Categoria[]  = []



constructor(private modalSS: ListenModalCategoriaService,private http: HttpClient){

}

ngOnInit(){
  this.modalSS.$modal.subscribe(valor=>this.modalNuevoSwitch = valor);
    this.modalSS.$modalEditarCategoria.subscribe(valor=>this.modalEditarSwitch = valor);
    this.obtenerCategorias();
    this.modalSS.$categoriaAgregada.subscribe(() => {
      // Aquí puedes recargar los datos o actualizar la vista
      this.obtenerCategorias(); // Supongo que tienes un método para cargar las entradas
    });
   
}

obtenerCategorias(){
  this.http.get<Categoria[]>('http://localhost:5054/api/Categoria').subscribe(
      (data) => {
        this.categorias = data; 
      },
      (error) => {
        console.error('Error al obtener las categorias:', error);
      }
    );
}

enviarCategoria(e: number){
  const categoriaEditar:Categoria = this.categorias[e];
  this.modalSS.obtenerCategoria(categoriaEditar);
  this.modalEditarSwitch = true;
  
}



eliminarCategoria(e: number){

  const confirmacion = confirm("¿Estás seguro de que quieres eliminar la categoria?");

  if(confirmacion){
    this.http.delete(`http://localhost:5054/api/Categoria/eliminar/${this.categorias[e].idCategoria}`).subscribe(
      (response: any) => {
        this.modalSS.cambiosCategoria();
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
