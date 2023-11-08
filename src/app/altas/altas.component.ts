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
  suedo: number=0;
  existencia: number=0;
  costo: number=0;
  id: number=0;
  marca: string="";


  constructor(private router: Router, private servicio: DbclientService){}

  cargarTabla(){
    //this.router.navigate([this.tabla]);
  }

  altaCliente(){
    const cliente = {
      idCliente: this.id,
      cnombre: this.nombre,
      cedad: this.edad,
      ctelefono: this.telefono,
      cdireccion: this.direccion
    };

    this.servicio.altaCliente(cliente).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }

  altaEmpleado(){
    const empleado = {
      idEmpleado: this.id,
      Enombre: this.nombre,
      Etelefono: this.telefono,
      Edireccion: this.direccion,
      Eedad: this.edad,
      suedo: this.suedo
    };

    this.servicio.altaEmpleado(empleado).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }

  altaProveedor(){
    const proveedor = {
      idProveedor: this.id,
      prnombre: this.nombre,
      predad: this.edad,
      prtelefono: this.telefono,
      prdireccion: this.direccion
    };

    this.servicio.altaProveedor(proveedor).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }

  altaDoctor(){
    const doctor = {
      idDoctor: this.id,
      dnombre: this.nombre,
      dedad: this.edad,
      dtelefono: this.telefono,
      ddireccion: this.direccion,
      dturno: this.turno
    };

    this.servicio.altaDoctor(doctor).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }

  altaProducto(){
    const producto = {
      idProducto: this.id,
      pnombre: this.nombre,
      pmarca: this.marca,
      pcosto: this.costo,
      pexitencia: this.existencia
    };

    this.servicio.altaProducto(producto).subscribe(
      (response:any)=>{
        console.log(response);
      },
      (error:any)=>{
        console.log(error);
      }
    );
  }  

}