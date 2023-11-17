import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbclientService } from '../dbclient.service';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent {
  
  selectedOption: string = 'producto';

  tabla:string = "cliente";
  nombre: string ="";
  edad: string = "";
  telefono: string = "";
  direccion: string ="";
  turno: string ="";
  sueldo: number=0;
  existencia: number=0;
  costo: number=0;
  id: number=0;
  marca: string="";


  constructor(private router: Router, private servicio: DbclientService){}

  altaCliente(){
    if(this.validaTelefono() && this.validaNombre()){
      const cliente = {
        NombreCliente: this.nombre,
        EdadCliente: this.edad,
        TelefonoCliente: this.telefono,
        DireccionCliente: this.direccion
      };

      this.servicio.altaCliente(cliente).subscribe(
        (response:any)=>{
          console.log(response);
        },
        (error:any)=>{
          console.log(error);
        }
      );
      
    }else
      console.log("NO ENTRA");
  }

  altaEmpleado(){
    if(this.validaNombre() && this.validaTelefono()){
      const empleado = {
        NombreEmpleado: this.nombre,
        TelefonoEmpleado: this.telefono,
        DireccionEmpleado: this.direccion,
        EdadEmpleado: this.edad,
        SueldoEmpleado: this.sueldo
      };

      this.servicio.altaEmpleado(empleado).subscribe(
        (response:any)=>{
          console.log(response);
        },
        (error:any)=>{
          console.log(error);
        }
      );
    }else 
      console.log("No ENTRA");
  }

  altaProveedor(){
    if(this.validaNombre() && this.validaTelefono()){
      const proveedor = {
        NombreProveedor: this.nombre,
        EdadProveedor: this.edad,
        TelefonoProveedor: this.telefono,
        DireccionProveedor: this.direccion
      };

      this.servicio.altaProveedor(proveedor).subscribe(
        (response:any)=>{
          console.log(response);
        },
        (error:any)=>{
          console.log(error);
        }
      );
    }else
      console.log("No entra");
  }

  altaDoctor(){
    if(this.validaNombre() && this.validaTelefono() &&
      this.validaTurno()){
      const doctor = {
        NombreDoctor: this.nombre,
        EdadDoctor: this.edad,
        TelefonoDoctor: this.telefono,
        DireccionDoctor: this.direccion,
        TurnoDoctor: this.turno,
        SueldoDoctor: this.sueldo
      };

      this.servicio.altaDoctor(doctor).subscribe(
        (response:any)=>{
          console.log(response);
        },
        (error:any)=>{
          console.log(error);
        }
      );
    }else 
      console.log("No Entra");
  }

  altaProducto(){
    if(this.validaNombre() && this.validaMarca()){
      const producto = {
        NombreProducto: this.nombre,
        MarcaProducto: this.marca,
        CostoProducto: this.costo,
        ExistenciaProducto: this.existencia
      };

      this.servicio.altaProducto(producto).subscribe(
        (response:any)=>{
          console.log(response);
        },
        (error:any)=>{
          console.log(error);
        }
      );
    }else 
      console.log("No entra");
  }  


  validaTelefono():boolean{
    if(/^[0-9]*$/.test(this.telefono))
      return true;
    else
      return false;
  }

  validaNombre():boolean{
    if(/^[a-zA-Z\s]*$/.test(this.nombre))
      return true;
    else
      return false;
  }

  validaMarca():boolean{
    if(/^[a-zA-Z\s]*$/.test(this.marca))
      return true;
    else
      return false;
  }

  validaTurno():boolean{
    if(/^(matutino|vespertino)$/i.test(this.turno))
      return true;
    else
      return false;
  }
}