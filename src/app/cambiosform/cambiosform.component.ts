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

  isNumber(propiedad:string):boolean{
    return propiedad.includes("Edad") || propiedad.includes("Costo") || propiedad.includes("Existencia")
    || propiedad.includes("Sueldo")
  }

  cambios(){
    if(this.validaTelefono() && this.validaNombre()
    && this.validaCosto() && this.validaTurno()){
      
      const obj = {
        tabla: this.tabla,
        registro: this.registro
      }

      this.servicio.cambio(obj).then((data) => {
        this.resultado = data;
        console.log(this.resultado);
      })
      .catch((err) => {
        console.log(err); 
      });

      console.log("Pasa a la BD!!");
    }else{
      console.log("NO pasa a la BD!!");
    }
  }

  validaTelefono():boolean{
    for(let prop in this.registro){
      if(prop.includes("Telefono")){
        if(/^[0-9]*$/.test(this.registro[prop])){
          return true;
        }else{
          return false;
        }
      }
    }
    return true;
  }

  validaNombre():boolean{
    for(let prop in this.registro){
      if(prop.includes("Nombre") || prop.includes("Marca")){
        if(/^[a-zA-Z\s]*$/.test(this.registro[prop])){
          return true;
        }else{
          return false;
        }
      }
    }
    return true;
  }

  validaCosto():boolean{
    for(let prop in this.registro){
      if(prop.includes("Costo") || prop.includes("Sueldo")){
        if(/^[0-9]+(\.[0-9]*)?$/.test(this.registro[prop])){
          return true;
        }else{
          return false;
        }
      }
    }
    return true;
  }

  validaTurno():boolean{
    for(let prop in this.registro){
      if(prop.includes("Turno")){
        if(/^(matutino|vespertino)$/i.test(this.registro[prop])){
          return true;
        }else{
          return false;
        }
      }
    }
    return true;
  }
}
