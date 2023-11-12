import { Component, OnInit } from '@angular/core';
import { DbclientService } from '../dbclient.service';

@Component({
  selector: 'app-cambiosform',
  templateUrl: './cambiosform.component.html',
  styleUrls: ['./cambiosform.component.css']
})
export class CambiosformComponent implements OnInit {

  tabla:string = "";
  registro:any;
  propiedades:any;
  resultado:any;


  constructor(private servicio:DbclientService) { }

  ngOnInit() {
    this.registro = history.state.obj;
    this.tabla = this.registro.tabla;
    this.registro = this.registro.registro;
    this.propiedades = Object.keys(this.registro);
  }

  cambios(){
    // llamar a la api para guardar los cambios
  /*this.servicio.cambio(this.tabla).then((data) => {
      this.resultado = data;
    })
    .catch((err) => {
      console.log(err); 
    });*/
  }
}
