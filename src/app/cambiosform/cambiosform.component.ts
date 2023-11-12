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
    return propiedad.includes("edad") || propiedad.includes("costo") || propiedad.includes("existencia")
    || propiedad.includes("sueldo")
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
      })
      .catch((err) => {
        console.log(err); 
      });

    }else{
      console.log("NO pasa a la BD!!");
    }
  }

  validaTelefono():boolean{
    for(let prop in this.registro){
      if(prop.includes("telefono")){
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
      if(prop.includes("nombre") || prop.includes("marca")){
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
      if(prop.includes("costo")){
        if(/^[0-9]*$/.test(this.registro[prop])){
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
      if(prop.includes("turno")){
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
