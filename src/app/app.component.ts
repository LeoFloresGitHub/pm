import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Equipos } from './models/equipos.model';
import { NgOptimizedImage } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  originalTitle: string;
  title = 'ProyectoPrueba';
  http = inject(HttpClient);
  equipos: Equipos[] = [];

  constructor() {
    this.originalTitle = this.title; 
  }

  changeTitle() {
    // Alternar el valor entre el original y 'Leonardo'
    if (this.title === this.originalTitle) {
      this.title = 'Leonardo';
    } else {
      this.title = this.originalTitle;
    }
  }

  ngOnInit(){
    /*this.http.get<Equipos[]>('https://liga1peruexpsress.fly.dev/api/liga1/equipos')
    .subscribe((data) =>{
      this.equipos = data;
    });*/
  }


}
