import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.models';
import { ListenModalCategoriaService } from 'src/app/services/categoria/listen-modal-categoria.service';

@Component({
  selector: 'app-nuevo-categoria',
  templateUrl: './nuevo-categoria.component.html',
  styleUrls: ['./nuevo-categoria.component.css']
})
export class NuevoCategoriaComponent {
  nuevaCategoria = {
    nombre: ""
  }

  categorias: Categoria[] = [];

  constructor(private modalSS: ListenModalCategoriaService, private http: HttpClient){
   
  }

  ngOnInit(){
  }

  

  enviarCategoria(){
    
    this.http.post('http://localhost:5054/api/Categoria/subir', this.nuevaCategoria).subscribe(
      (response: any) => {
        this.modalSS.cambiosCategoria();
        console.log('Categoria enviada:', response);
      },(error) => {
        console.error('Error al enviar la categoria:', error);
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
