import { Component, Input} from '@angular/core';
import { Equipos } from 'src/app/models/equipos.model';


@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent {
@Input() equipo! : Equipos ;
}
