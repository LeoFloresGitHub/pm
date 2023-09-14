import { Component } from '@angular/core';
import { ListenModalService } from 'src/app/services/entrada/listen-modal.service';
import { Entrada } from 'src/app/models/entrada.models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent {

  modalNuevoSwitch:boolean = false;
  modalEditarSwitch:boolean = false;
  entradas: Entrada[] = [];

  constructor(private modalSS: ListenModalService,private http: HttpClient){

  }

  ngOnInit(){

    this.modalSS.$modal.subscribe(valor=>this.modalNuevoSwitch = valor);
    this.modalSS.$modalEditarEntrada.subscribe(valor=>this.modalEditarSwitch = valor);
    this.obtenerEntradas();
    this.modalSS.$entradaAgregada.subscribe(() => {
      // Aquí puedes recargar los datos o actualizar la vista
      this.obtenerEntradas(); // Supongo que tienes un método para cargar las entradas
    });

  }

  obtenerEntradas(): void {
    this.http.get<Entrada[]>('http://localhost:5054/api/Entrada').subscribe(
      (data) => {
        this.entradas = data; 
      },
      (error) => {
        console.error('Error al obtener las entradas:', error);
      }
    );
  }


  enviarEntrada(e: number){
    
    const entradaEditar:Entrada = this.entradas[e];
    this.modalSS.obtenerEntrada(entradaEditar);
    this.modalEditarSwitch = true;
    
  }
 


  eliminarEntrada(e: number){
  
    const confirmacion = confirm("¿Estás seguro de que quieres eliminar la entrada?");

    if(confirmacion){
      this.http.delete(`http://localhost:5054/api/Entrada/eliminar/${this.entradas[e].idEntrada}`).subscribe(
        (response: any) => {
          this.modalSS.cambiosEntrada();
        },
        (error) => {
          console.error('Error al obtener las entradas:', error);
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
