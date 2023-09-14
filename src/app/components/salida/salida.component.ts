import { Component } from '@angular/core';
import { ListenModalSalidaService } from 'src/app/services/salida/listen-modal-salida.service';
import { Salida } from 'src/app/models/salida.models';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent {


  modalNuevoSwitch:boolean = false;
  modalEditarSwitch:boolean = false;
  salidas: Salida[] = [];

  constructor(private modalSS: ListenModalSalidaService,private http: HttpClient){

  }

  ngOnInit(){

    this.modalSS.$modal.subscribe(valor=>this.modalNuevoSwitch = valor);
    this.modalSS.$modalEditarSalida.subscribe(valor=>this.modalEditarSwitch = valor);
    this.obtenerSalidas();
    this.modalSS.$salidaAgregada.subscribe(() => {
      // Aquí puedes recargar los datos o actualizar la vista
      this.obtenerSalidas(); // Supongo que tienes un método para cargar las entradas
    });

  }

  obtenerSalidas(): void {
    this.http.get<Salida[]>('http://localhost:5054/api/Salida').subscribe(
      (data) => {
        this.salidas = data; 
      },
      (error) => {
        console.error('Error al obtener las salidas:', error);
      }
    );
  }

  enviarSalida(e: number){
    
    const salidaEditar:Salida = this.salidas[e];
    this.modalSS.obtenerSalida(salidaEditar);
    this.modalEditarSwitch = true;
    
  }

  eliminarSalida(e: number){
  
    const confirmacion = confirm("¿Estás seguro de que quieres eliminar la salida?");

    if(confirmacion){
      this.http.delete(`http://localhost:5054/api/Salida/eliminar/${this.salidas[e].idSalida}`).subscribe(
        (response: any) => {
          this.modalSS.cambiosSalida();
        },
        (error) => {
          console.error('Error al obtener las salidas:', error);
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
