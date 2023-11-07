import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambiosform',
  templateUrl: './cambiosform.component.html',
  styleUrls: ['./cambiosform.component.css']
})
export class CambiosformComponent implements OnInit {

  tabla:string = "";
  registro:any;
  propiedades:any;


  constructor() { }

  ngOnInit() {
    this.registro = history.state.obj;
    this.tabla = this.registro.tabla;
    this.registro = this.registro.registro;
    this.propiedades = Object.keys(this.registro);
  }

  cambios(){
    // llamar a la api para guardar los cambios
    
  }
    

}
