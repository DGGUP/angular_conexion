import { Component } from '@angular/core';
import { RegistroService } from '../../servicios/registro/registro.service';
@Component({
  selector: 'app-doscampos',
  templateUrl: './doscampos.component.html',
  styleUrl: './doscampos.component.css'
})
export class DoscamposComponent {

registros = []; 
constructor(private registroSrv:RegistroService){

}
ngOnInit(){
console.log ("registros obtenidos a continuacion")
this.registrosObtenidos();


}

  registrosObtenidos(){
    this.registroSrv.ObtenerRegistros().subscribe(
      (response:any) => {
        this.registros =response.registros;
        console.log(this.registros[0],[campo1],[campo2]);
      }
    );

  }

}
